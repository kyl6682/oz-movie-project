import { useState } from "react";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";
import AuthForm from "./Auth/AuthForm";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./Auth/AuthContext";

function Login() {
  const { login : supabaseLogin } = useEmailAuth();
  const {login : setUserContext } = useAuthContext();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async ({email, password}) => {
    setError(null);
    try {
        const userInfo = await supabaseLogin({email, password});
        if (userInfo.user) {
            console.log("로그인 성공", userInfo);
            alert (`${userInfo.user.userName}님 환영합니다.`)
            
            setUserContext(userInfo.user);

            navigate('/')
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
