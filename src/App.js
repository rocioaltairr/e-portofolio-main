// import Header from "./Components/Header"
import Home from './pages/Home'
import "./App.css";
import "./css/default.css";
import "./css/layout.css";
import "./css/fonts.css";
import "./css/media-queries.css";
import "./css/magnific-popup.css";
import Module1 from './pages/module1';
import { Route, Routes } from "react-router-dom"
import Resume from './pages/Resume';
import About from './pages/About/about';

function App() {
  return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/module1" element={<Module1 />} />
        </Routes>
      </div>
  )
}

export default App