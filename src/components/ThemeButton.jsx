import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../RTK/themeSlice";
import styled from "styled-components";

const ThemToggleButton = styled.button`
  padding: 5px 20px;
  border-radius: 999px;
  background-color:  ${(props) => props.theme.toggleBack};
  &:hover {
    opacity: 0.8;
  }
`

function ThemeButton() {
  const dispatch =  useDispatch()
  const darkMode = useSelector((state) => state.theme.darkMode)
  return (
    <>
      <ThemToggleButton onClick={() => dispatch(toggleDarkMode())}>{darkMode? "🌚" : "🌝"}</ThemToggleButton>
    </>
  );
}

export default ThemeButton
