import { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/Auth/AuthContext";
import { SocialLogin } from "../style/AuthStyles";
import { PageWrapper } from "../style/CommonStyles";
import { useSupabaseAuth } from "../supabase";

function Login() {
  const { login: supabaseLogin } = useSupabaseAuth();
  const { login: setUserContext } = useAuthContext();
  const { loginWithGoogle, loginWithKakao } = useSupabaseAuth();
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
      <PageWrapper>
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
      </PageWrapper>
    </>
  );
}

export default Login;
