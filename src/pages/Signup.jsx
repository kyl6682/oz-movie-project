import { useState } from "react";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";
import AuthForm from "../components/Auth/AuthForm";

function Signup() {
  const { signUp } = useEmailAuth();
  const [error, setError] = useState(null);

  const handleSignup = async ({ email, password, name }) => {
    setError(null);
    try {
      const userInfo = await signUp({ email, password, name });
      if (userInfo.user) {
        console.log("회원가입 성공", userInfo);
        alert("회원가입 완료!");
      } else {
        setError(userInfo.error.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return <AuthForm type="signup" onSubmit={handleSignup} error={error} />;
}

export default Signup;
