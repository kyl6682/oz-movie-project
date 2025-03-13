import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../RTK/themeSlice";
import { ThemToggleButton } from "../../style/CommonStyles";

function ThemeButton() {
  const dispatch =  useDispatch()
  const darkMode = useSelector((state) => state.theme.darkMode)
  return (
    <>
      <ThemToggleButton onClick={() => dispatch(toggleDarkMode())}>{darkMode? "🌝" : "🌚"}</ThemToggleButton>
    </>
  );
}

export default ThemeButton
