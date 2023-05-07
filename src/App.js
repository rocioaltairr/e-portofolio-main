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
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App