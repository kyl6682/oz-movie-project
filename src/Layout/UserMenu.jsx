import { useAuthContext } from "../components/Auth/AuthContext";
import { Link } from "react-router-dom";
import useDevice from "../hooks/useDevice";
import { UserIcon } from "../assets/Icons/User";
import { useState } from "react";
import Button from "../components/common/Button";
import { HamburgerIcon } from "../assets/Icons/Hamburger";
import { DropdownMenu, MenuItem, Wrapper } from "../style/CommonStyles";
import ThemeButton from "../components/common/ThemeButton";

function UserMenu() {
  const { user, logout } = useAuthContext();
  const { isPC } = useDevice();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {!isPC &&
        (user ? (
          <>
            <Wrapper direction={"row"}>
              <button onClick={handleToggleMenu}>
                <UserIcon />
              </button>
              <DropdownMenu open={menuOpen}>
                <MenuItem to={"/"}>관심 목록</MenuItem>
                <MenuItem to={"/"} onClick={logout}>
                  로그아웃
                </MenuItem>
              </DropdownMenu>
              <ThemeButton />
            </Wrapper>
          </>
        ) : (
          <>
            <Wrapper direction={"row"}>
              <button onClick={handleToggleMenu}>
                <HamburgerIcon/>
              </button>
              <DropdownMenu open={menuOpen}>
                <MenuItem to={"/login"}>로그인</MenuItem>
                <MenuItem to={"/signup"}>회원가입</MenuItem>
              </DropdownMenu>
              <ThemeButton />
            </Wrapper>
          </>
        ))}
      {isPC &&
        (user ? (
          <>
            <Wrapper direction={"row"}>
              <p>✋ {user?.userName}님 환영합니다!</p>
              <button onClick={handleToggleMenu}>
                <UserIcon />
              </button>
              <DropdownMenu open={menuOpen}>
                <MenuItem to={"/"}>관심 목록</MenuItem>
                <MenuItem to={"/"} onClick={logout}>
                  로그아웃
                </MenuItem>
              </DropdownMenu>
              <ThemeButton />
            </Wrapper>
          </>
        ) : (
          <>
            <Wrapper direction={"row"}>
              <Link to={"/login"}>
                <Button text={"로그인"} />
              </Link>
              <Link to={"/signup"}>
                <Button text={"회원가입"} />
              </Link>
              <ThemeButton />
            </Wrapper>
          </>
        ))}
    </>
  );
}

export default UserMenu;
