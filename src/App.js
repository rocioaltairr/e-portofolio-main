
import Home from './pages/Home'
// import "./App.css";
// import "./css/default.css";
// import "./css/layout.css";
// import "./css/fonts.css";
// import "./css/media-queries.css";
// import "./css/magnific-popup.css";
import Module1 from './pages/module1';
import Module2 from './pages/module2';
import Module3 from './pages/module3';
import Module4 from './pages/module4';
import Module5 from './pages/module5';
import Module6 from './pages/module6';
import { Route, Routes } from "react-router-dom"
import Resume from './pages/Resume';
import About from './pages/About/about';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/module1" element={<Module1 />} />
          <Route path="/module2" element={<Module2 />} />
          <Route path="/module3" element={<Module3 />} />
          <Route path="/module4" element={<Module4 />} />
          <Route path="/module5" element={<Module5 />} />
          <Route path="/module6" element={<Module6 />} />
    </Routes>
      // <div className="container">
        
      // </div>
  )
}

export default App