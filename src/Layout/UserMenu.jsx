import styled from "styled-components";
import { useAuthContext } from "../components/Auth/AuthContext";
import { Link } from "react-router-dom";
import useDevice from "../hooks/useDevice";
import { UserIcon } from "../assets/Icons/User";
import { useState } from "react";
import Button from "../components/common/Button";
import { HamburgerIcon } from "../assets/Icons/Hamburger";

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MobileWrapper = styled(MenuWrapper)`
  flex-direction: column;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  z-index: 100;
  width: 100px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10 px;
  gap: 10px;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
`;

const MenuItem = styled(Link)`
  &:hover {
    opacity: 0.5;
  }
`;

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
            <MobileWrapper>
              <button onClick={handleToggleMenu}>
                <UserIcon />
              </button>
              <DropdownMenu open={menuOpen}>
                <MenuItem to={"/"}>관심 목록</MenuItem>
                <MenuItem to={"/"} onClick={logout}>
                  로그아웃
                </MenuItem>
              </DropdownMenu>
            </MobileWrapper>
          </>
        ) : (
          <>
            <MobileWrapper>
              <button onClick={handleToggleMenu}>
                <HamburgerIcon />
              </button>
              <DropdownMenu open={menuOpen}>
                <MenuItem to={"/login"}>로그인</MenuItem>
                <MenuItem to={"/signup"}>회원가입</MenuItem>
              </DropdownMenu>
            </MobileWrapper>
          </>
        ))}
      {isPC &&
        (user ? (
          <>
            <MenuWrapper>
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
            </MenuWrapper>
          </>
        ) : (
          <>
            <MenuWrapper>
              <Link to={"/login"}>
                <Button text={"로그인"} />
              </Link>
              <Link to={"/signup"}>
                <Button text={"회원가입"} />
              </Link>
            </MenuWrapper>
          </>
        ))}
    </>
  );
}

export default UserMenu;
