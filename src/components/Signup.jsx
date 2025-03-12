// 영문 숫자조합 8자리 이상 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/

import styled from "styled-components";
import InputField from "./common/Input";
import Label from "./common/Label";
import Button from "./common/Button";
import { useRef, useState } from "react";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  button {
    margin: 20px 0;
    width: 400px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: start;
  justify-content: center;
`;

function Signup() {
  const { signUp } = useEmailAuth();    // 회원가입 함수
  const userMailRef = useRef(null);
  const userNameRef = useRef(null);
  const userPw1Ref = useRef(null);
  const userPw2Ref = useRef(null);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)

  const validationForm = () => {
    let newErrors = {};

    const email = userMailRef.current.value;
    const name = userNameRef.current.value;
    const password1 = userPw1Ref.current.value;
    const password2 = userPw2Ref.current.value;

    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if (!email.includes("@")) {
      newErrors.user_mail = "올바른 이메일 주소를 입력하세요.";
    }
    if (name.trim().length < 2) {
      newErrors.user_name = "이름은 최소 2글자 이상 입력해야 합니다.";
    }
    if (!passwordRegExp.test(password1)) {
      newErrors.user_pw1 =
        "비밀번호는 숫자와 문자를 포함한 8자 이상이어야 합니다.";
    }
    if (password1 !== password2) {
      newErrors.user_pw2 = "비밀번호가 일치하지 않습니다.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validationForm()) return;

    setLoading(true);

    const email = userMailRef.current.value;
    const name = userNameRef.current.value;
    const password = userPw1Ref.current.value;

    try {
        const userInfo = await signUp({email, password, name});

        if (userInfo.user) {
            console.log("회원가입 성공", userInfo);
            alert("회원가입이 완료되었습니다!")
        } else {
            console.log("회원가입 실패", userInfo.error);
            setErrors((prevErrors) => ({
                ...prevErrors, 
                auth: userInfo.error.message
            }))
        }
    } catch (error) {
        console.log("에러 발생", error);
        setErrors((prevErrors) => ({
            ...prevErrors,
            auth : error.message
        }))
    } finally {
        setLoading(false)
    }
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Label text={"이메일"} htmlFor={"user_mail"} />
          <InputField
            id={"user_mail"}
            type={"email"}
            placeholder={"이메일을 입력하세요."}
            name={"user_mail"}
            ref={userMailRef}
            err={errors.user_mail}
          />
          <Label text={"이름"} htmlFor={"user_name"} />
          <InputField
            id={"user_name"}
            placeholder={"이름을 입력하세요."}
            name={"user_name"}
            ref={userNameRef}
            err={errors.user_name}
          />
          <Label text={"비밀번호"} htmlFor={"user_pw1"} />
          <InputField
            id={"user_pw1"}
            type={"password"}
            placeholder={"8~20자 사이의 영문 숫자 조합"}
            name={"user_pw1"}
            ref={userPw1Ref}
            err={errors.user_pw1}
          />
          <Label text={"비밀번호 확인"} htmlFor={"user_pw2"} />
          <InputField
            id={"user_pw2"}
            type={"password"}
            placeholder={"비밀번호 재입력"}
            name={"user_pw2"}
            ref={userPw2Ref}
            err={errors.user_pw2}
          />
          <Button text={"회원가입"} />
        </Form>
      </Wrapper>
    </>
  );
}

export default Signup;
