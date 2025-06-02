import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import BMICalculator from "./components/BMICalculator";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import BMIPage from "./pages/BMIPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // simulate 2.5s load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={loading ? <Preloader /> : <Home />} />
        <Route path="/bmi" element={<BMIPage />} />
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
