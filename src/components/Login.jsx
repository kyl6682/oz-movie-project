import { useRef, useState } from "react";
import InputField from "./common/Input";
import Label from "./common/Label";
import styled from "styled-components";
import Button from "./common/Button";
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

function Login() {
  const { login } = useEmailAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userInfo = await login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if (userInfo.user) {
        console.log("로그인 성공", userInfo);
        alert("로그인 성공");
      } else {
        setError(userInfo.error.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleLogin}>
          <Label text={"이메일"} htmlFor={"email"} />
          <InputField
            id="email"
            type="email"
            ref={emailRef}
            placeholder="이메일 입력"
          />
          <Label text={"비밀번호"} htmlFor={"password"} />
          <InputField
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="비밀번호 입력"
          />
          <Button text={"로그인"} />
        </Form>
      </Wrapper>
    </>
  );
}

export default Login;
