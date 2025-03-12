import { useState } from "react";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";
import AuthForm from "../components/Auth/AuthForm";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/Auth/AuthContext";
import { useOAuth } from "../supabase/auth/useOauth.auth";
import styled from "styled-components";

const SocialLogin = styled.button`
  margin-top: 20px;
  font-size: 1rem;
  border-radius: 8px;
  width: 200px;
  height: 50px;
  font-weight: 600;
  cursor: pointer;
  hover {
    opacity: 0.5;
  }
`;

function Login() {
  const { login: supabaseLogin } = useEmailAuth();
  const { login: setUserContext } = useAuthContext();
  const { loginWithGoogle, loginWithKakao } = useOAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    setError(null);
    try {
      const userInfo = await supabaseLogin({ email, password });
      if (userInfo.user) {
        console.log("로그인 성공", userInfo);
        alert(`${userInfo.user.userName}님 환영합니다.`);

        setUserContext(userInfo.user);

        navigate("/");
      } else {
        setError(userInfo.error.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = () => {
    console.log("구글 로그인 요청", import.meta.env.VITE_GOOGLE_REDIRECT_URI);
    loginWithGoogle();
  };

  const handleKakaoLogin = () => {
    console.log("카카오 로그인 요청", import.meta.env.VITE_KAKAO_REDIRECT_URI);
    loginWithKakao();
  };

  return (
    <>
      <AuthForm type="login" onSubmit={handleLogin} error={error} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <SocialLogin
          style={{ backgroundColor: "#f9e000" }}
          onClick={handleKakaoLogin}
        >
          카카오로 로그인
        </SocialLogin>
        <SocialLogin
          style={{ backgroundColor: "#4285F4", color: "white" }}
          onClick={handleGoogleLogin}
        >
          구글로 로그인
        </SocialLogin>
      </div>
    </>
  );
}

export default Login;
