import "./App.css";
import Home from "./Components/Home/home";
import Experience from "./Components/Experience/experience";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";



function App() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div  className="app-container"  onMouseMove={handleMouseMove} >
      <div
        className="flashlight-overlay"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29,78,216,0.15) 120px, transparent 80%)`,
        }}
      />
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
