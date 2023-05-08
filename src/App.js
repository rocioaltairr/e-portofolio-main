// import Header from "./Components/Header"
// import About from "./pages/About/about"
// import Resume from "./pages/Resume";
import Home from './pages/Home'
import "./App.css";
import "./css/default.css";
import "./css/layout.css";
// import Portofolio from "./pages/Portofolio"
import Module1 from './pages/module1';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
  
  //   <div className="App">
  //   <Header />
  //   <About />
  //   <Resume />
  //   {/* <Resume data={this.state.resumeData.resume} />
  //   <Portfolio data={this.state.resumeData.portfolio} />
  //   <Contact data={this.state.resumeData.main} />
  //   <Footer data={this.state.resumeData.main} /> */}
  // </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/module1" element={<Module1 />} />
        </Routes>
      </div>
  )
}

export default App