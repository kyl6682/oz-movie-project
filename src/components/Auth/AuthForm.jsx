import { useRef, useState } from "react";
import { Wrapper, Form } from "../common/StyledComponents";
import Label from "../common/Label";
import InputField from "../common/Input";
import Button from "../common/Button";

function AuthForm({ type, onSubmit, error }) {
  const mailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [errors, setErrors] = useState({});

  console.log(error)

  const validationForm = () => {
    let newErrors = {};
    console.log(errors)

    const email = mailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const name = nameRef.current?.value || "";
    const confirmPassword = confirmPasswordRef?.current?.value || "";

    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    // 비밀번호 숫자/문자 조합 8~25자 정규식

    if (!email.includes("@")) {
      newErrors.email = "올바른 이메일 주소를 입력하세요.";
    }
    if (type === "signup" && name.trim().length < 2) {
      newErrors.name = "이름은 최소 2글자 이상 입력해야 합니다.";
    }
    if (!passwordRegExp.test(password)) {
      newErrors.password =
        "비밀번호는 숫자와 문자를 포함한 8자 이상이어야 합니다.";
    }
    if (type === "signup" && password !== confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    // newError 객체에 오류가 존재하는지 체크 -> true/false 반환
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validationForm()) return;
    // 유효성 통과 못하면 return

    const formData = {
      email: mailRef.current.value,
      password: passwordRef.current.value,
    };
    if (type === "signup") {
      formData.name = nameRef.current.value;
      // signup 일 경우에만 이름 데이터 받음
    }
    onSubmit(formData);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label text={"이메일"} htmlFor={"email"} />
        <InputField
          id={"email"}
          type={"email"}
          placeholder={"이메일을 입력하세요."}
          name={"email"}
          ref={mailRef}
          err={errors.user_mail}
        />
        {type === "signup" && (
          <>
            <Label text={"이름"} htmlFor={"name"} />
            <InputField
              id={"name"}
              placeholder={"이름을 입력하세요."}
              name={"name"}
              ref={nameRef}
              err={errors.name}
            />
          </>
        )}
        <Label text={"비밀번호"} htmlFor={"password"} />
        <InputField
          id={"password"}
          type={"password"}
          placeholder={"8~20자 사이의 영문 숫자 조합"}
          name={"password"}
          ref={passwordRef}
          err={errors.password}
        />
        {type === "signup" && (
          <>
            <Label text={"비밀번호 확인"} htmlFor={"confirmPassword"} />
            <InputField
              id={"confirmPassword"}
              type={"password"}
              placeholder={"비밀번호 재입력"}
              name={"confirmPassword"}
              ref={confirmPasswordRef}
              err={errors.confirmPassword}
            />
          </>
        )}
        <Button text={type === "signup" ? "회원가입" : "로그인"} />
      </Form>
    </Wrapper>
  );
}

export default AuthForm;
