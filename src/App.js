import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About/about"
import Portofolio from "./pages/Portofolio"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Routes>
      </div>
    </>
  )
}

export default App