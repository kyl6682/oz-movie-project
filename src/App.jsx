import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
