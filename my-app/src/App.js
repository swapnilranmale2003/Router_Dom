import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
// import Page404 from "./component/Page404";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/*" element={<Page404/>} /> */}
          <Route path="/contact" element={<Navigate to ="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
