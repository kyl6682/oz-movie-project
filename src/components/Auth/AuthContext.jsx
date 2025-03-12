import { createContext, useContext, useEffect, useState } from "react";
import { useSupabaseAuth } from "../../supabase";

// 전역 상태 저장소 context 생성
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { getUserInfo, logout: supabaseLogout } = useSupabaseAuth();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          const userInfo = await getUserInfo();
          console.log("Supabase에서 가져온 유저 정보:", userInfo);

          if (userInfo && userInfo.user) {
            setUser(userInfo.user);
            localStorage.setItem("user", JSON.stringify(userInfo.user));
          } else {
            console.log("로그인이 필요합니다.");
          }
        }
      } catch (error) {
        console.log("유저 정보 가져오는 중 오류", error);
      }
    };
    fetchUserInfo();
  }, []);

  // 로컬 스토리지에 저장
  const login = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  // 로컬 스토리지에서 삭제
  const handleLogout = async () => {
    await supabaseLogout();
    setUser(null);
    localStorage.removeItem("user");
    window.location.reload()
  };

  return (
    <AuthContext.Provider value={{ user, login, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
