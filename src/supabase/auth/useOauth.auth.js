import { useSupabase } from "../context";

export const useOAuth = () => {
  const supabase = useSupabase();
  
  // 카카오 로그인
  const loginWithKakao = async (
    redirectTo = import.meta.env.VITE_KAKAO_REST_API_KEY,
    ...otherOptions
  ) => {
    console.log("카카오 로그인 Redirect URI:", redirectTo);

    try {
      await supabase.auth.signInWithOAuth({
        provider: "kakao",
        options: {
          redirectTo,
          ...otherOptions,
        },
      });
    } catch (error) {
      console.error("카카오 로그인 에러:", error.message);

      throw new Error(error);
    }
  };

  // 구글 로그인
  const loginWithGoogle = async (
    redirectTo = import.meta.env.VITE_GOOGLE_REDIRECT_URI,
    ...otherOptions
  ) => {
    console.log("구글 로그인 Redirect URI:", redirectTo);

    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
          ...otherOptions,
        },
      });
    } catch (error) {
      console.error("구글 로그인 에러:", error.message);

      throw new Error(error);
    }
  };

  return { loginWithKakao, loginWithGoogle };
};
