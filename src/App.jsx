import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BMICalculator from "./pages/BMICalculator";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
