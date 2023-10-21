// import Header from "./Components/Header"
import Home from './pages/Home'
import "./App.css";
import "./css/default.css";
import "./css/layout.css";
import "./css/fonts.css";
import "./css/media-queries.css";
import "./css/magnific-popup.css";
import Module1 from './pages/module1';
import Module2 from './pages/module2';
import Module3 from './pages/module3';
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
          <Route path="/module2" element={<Module2 />} />
          <Route path="/module3" element={<Module3 />} />
        </Routes>
      </div>
  )
}

export default App