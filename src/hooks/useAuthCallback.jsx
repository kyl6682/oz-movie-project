import { useNavigate } from "react-router-dom";
import { useSupabase } from "../supabase"
import { useEffect } from "react";

const useAuthCallback = () => {
    const supabase = useSupabase();
    const navigate = useNavigate();

    useEffect(() => {
        const handleOAuthCallback = async () => {
            const {data, error} = await supabase.auth.getSession();
            if (error) {
                console.error("OAuth 로그인 실패 : ", error.message)
            } else {
                console.log("OAuth 로그인 성공 : ", data)
                navigate("/")
            }
        }
        handleOAuthCallback();
    },[navigate, supabase])

    return <div>로그인 중입니다...</div>
}

export default useAuthCallback