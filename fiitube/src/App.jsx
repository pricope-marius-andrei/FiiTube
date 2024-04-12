import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Profile from "../src/pages/Profile"

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
