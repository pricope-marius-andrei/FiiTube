import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Profile from "../src/pages/Profile"
import VideoPage from "../src/pages/VideoPage"

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/videos" element={<VideoPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
