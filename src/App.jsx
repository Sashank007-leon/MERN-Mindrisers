import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
