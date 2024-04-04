import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, DashBoard, Login, Projects, SignUp } from "./Pages";
import Navbar from './Component/Navbar.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Navbar" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
