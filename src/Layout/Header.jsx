import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserIcon } from "../assets/Icons/User";
import { SearchIcon } from "../assets/Icons/Search";
import useDevice from "../hooks/useDevice";

const NavStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 60px;
  justify-content: space-between;
  padding: 20px 60px;
`;

const LogoStyle = styled.div`
  font-size: 1.7rem;
  color: black;
  font-weight: 900;
`;

const MobileLogoStyle = styled(LogoStyle)`
  font-size: 1.5rem;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #efefef;
  padding: 10px 16px;
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

const AccountDiv = styled(Wrapper)`
  button {
    padding: 12px 24px;
    border-radius: 8px;
    background-color: #875dea;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #6f48cb;
    }
  }
`;

function Header() {
  const navigate = useNavigate();
  const {isMobile, isTablet, isPC} = useDevice()

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
            <button>
              <UserIcon />
            </button>
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
          <button>
            <UserIcon />
          </button>
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
          <AccountDiv>
            <button>로그인</button>
            <button>회원가입</button>
          </AccountDiv>
        </NavStyle>
      )}
    </>
  );
}

export default Header;
