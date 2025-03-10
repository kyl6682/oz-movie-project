import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Layout from "./Layout/Layout";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
