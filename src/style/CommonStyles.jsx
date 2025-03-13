import { Link } from "react-router-dom";
import styled from "styled-components";

export const ThemToggleButton = styled.button`
  padding: 5px;
  border-radius: 999px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Wrapper
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  gap: ${(props) => props.gap || "10px"};
  justify-content: center;
  align-items: center;
  height : auto;
`;

export const PageWrapper = styled(Wrapper)`
  min-height: 93vh;
  padding: 0 160px;
`;

// Header
export const NavStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 7vh;
  justify-content: space-between;
  padding: 10px 40px;
`;

export const LogoStyle = styled.div`
  font-size: 1.7rem;
  color: ${(props) => props.theme.text};
  font-weight: 900;
`;

export const MobileLogoStyle = styled(LogoStyle)`
  font-size: 1.5rem;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: #efefef;
  padding: 10px 16px;
  margin: 0px 40px;
  width: 400px;
  height: 40px;
  border-radius: 8px;
  flex-grow: 1;
`;

export const DropdownMenu = styled.div`
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

export const MenuItem = styled(Link)`
  &:hover {
    opacity: 0.5;
  }
`;

// Button
export const ButtonStyle = styled.button`
  background-color: #875dea;
  padding: 12px 24px;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #6f48cb;
  }
`;
// Input Field
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #b5b4b4;
  border-radius: 7px;
  width: 100%;
  &::placeholder {
    color: #b5b4b4;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;
