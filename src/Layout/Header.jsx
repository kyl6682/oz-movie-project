import { Link, useNavigate } from "react-router-dom";
import { SearchIcon } from "../assets/Icons/Search";
import useDevice from "../hooks/useDevice";
import UserMenu from "./UserMenu";
import {
  LogoStyle,
  MobileLogoStyle,
  NavStyle,
  SearchInput,
} from "../style/CommonStyles";

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
          <div style={{flexGrow:1}}></div>
          <button>
            <SearchIcon />
          </button>
          <UserMenu />
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
        </NavStyle>
      )}
    </>
  );
}

export default Header;
