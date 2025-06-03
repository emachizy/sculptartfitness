import { motion } from "framer-motion";
import BMICalculator from "../components/BMICalculator";
import BMICategories from "../components/BMICategories";
import { mobileHeroImg } from "../assets/assets";

const BMIPage = () => {
  return (
    <section>
      <div className="relative h-[30vh] md:h-[60vh] w-full">
        {/* Background Image Slider */}

        <img
          src={mobileHeroImg[2]} // Assuming you want the first image for the background
          alt="contact image"
          className="object-cover w-full h-full"
        />

        {/* Glassmorphism Overlay Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-20 flex items-center justify-center px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/30 shadow-xl rounded-2xl px-6 py-10 text-center text-white max-w-md w-full">
            <p className="text-lg md:text-xl mb-6 font-bold">BMI Calculator</p>
          </div>
        </motion.div>
      </div>
      <div className="min-h-screen py-20 px-4 bg-gray-100">
        {/* <h1 className="text-4xl font-bold text-center text-primary mb-12">
          BMI Calculator
        </h1> */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <BMICalculator />
          <BMICategories />
        </div>
      </div>
    </section>
  );
};

export default BMIPage;
