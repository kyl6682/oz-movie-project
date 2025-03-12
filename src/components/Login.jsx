import { useState } from "react";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";
import AuthForm from "./Auth/AuthForm";

function Login() {
  const { login } = useEmailAuth();
  const [error, setError] = useState(null);

  const handleLogin = async ({email, password}) => {
    setError(null);
    try {
        const userInfo = await login({email, password});
        if (userInfo.user) {
            console.log("로그인 성공", userInfo);
            alert (`${userInfo.user.userName}님 환영합니다.`)
            // window.location.href = "/dashboard"
        } else {
            setError(userInfo.error.message)
        }
    } catch (err) {
        setError(err.message)
    }
  }
  

  return (
    <>
    <AuthForm type="login" onSubmit={handleLogin} error={error}/>
    </>
  );
}

export default Login;
