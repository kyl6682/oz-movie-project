import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/About";

function NavBar() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<About />} />
      </Routes>
    </>
  );
}

export default NavBar;
