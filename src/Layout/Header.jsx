import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchIcon } from "../assets/Icons/Search";
import useDevice from "../hooks/useDevice";
import UserMenu from "./UserMenu";
import ThemeButton from "../components/common/ThemeButton";

const NavStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 60px;
  justify-content: space-between;
  padding: 10px 40px;
`;

const LogoStyle = styled.div`
  font-size: 1.7rem;
  color: ${(props) => props.theme.text};
  font-weight: 900;
`;

const MobileLogoStyle = styled(LogoStyle)`
  font-size: 1.5rem;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #efefef;
  padding: 10px 16px;
  margin: 0px 40px;
  width: 400px;
  height: 40px;
  border-radius: 8px;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  button {
    background-color: transparent;
  }
`;

function Header() {
  const navigate = useNavigate();
  const { isMobile, isTablet, isPC } = useDevice();

  return (
    <>
      {isMobile && (
        <NavStyle>
          <Link to={"/"}>
            <MobileLogoStyle>OZ 무비</MobileLogoStyle>
          </Link>
          <Wrapper>
            <button>
              <SearchIcon />
            </button>
            <UserMenu />
          </Wrapper>
        </NavStyle>
      )}
      {isTablet && (
        <NavStyle>
          <Link to={"/"}>
            <MobileLogoStyle>OZ 무비</MobileLogoStyle>
          </Link>
          <SearchInput
            onChange={(e) => {
              navigate(`/search?movie=${e.target.value}`);
            }}
          />
          <UserMenu />
        </NavStyle>
      )}
      {isPC && (
        <NavStyle>
          <Link to={"/"}>
            <LogoStyle>OZ 무비</LogoStyle>
          </Link>
          <SearchInput
            onChange={(e) => {
              navigate(`/search?movie=${e.target.value}`);
            }}
          />
          <UserMenu />
          <ThemeButton />
        </NavStyle>
      )}
    </>
  );
}

export default Header;
