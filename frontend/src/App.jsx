import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, DashBoard, Login, Projects, SignUp } from "./Pages";
import Header from "./Component/Header.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
