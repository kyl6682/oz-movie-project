import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Layout from "./Layout/Layout";
import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  shadow : "rgba(0, 0, 0, 0.2)"
};

const darkTheme = {
  background: "#23232a",
  text: "#ffffff",
  toggleBack : "#3e3e44",
  shadow : "rgba(255, 255, 255, 0.2)"
};

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
