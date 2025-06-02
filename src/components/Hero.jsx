import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, EffectFlip } from "swiper/modules";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/effect-fade";
import { mobileHeroImg } from "../assets/assets";

const Hero = () => {
  const coloredWords = [
    <span key="1" className="text-primary">
      Welcome to SculptArtFitness
    </span>,
    <span key="2" className="text-green-400">
      Transform Your Body
    </span>,
    <span key="3" className="text-yellow-400">
      Elevate Your Strength
    </span>,
  ];
  return (
    <div className="relative h-[50vh] md:h-[90vh] w-full">
      {/* Background Image Slider */}
      <Swiper
        modules={[EffectFade, Autoplay, EffectFlip]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={3200}
        className="absolute inset-0 h-full w-full z-0"
      >
        {mobileHeroImg.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="object-cover w-full h-full md:min-h-screen"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Glassmorphism Overlay Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-20 flex items-center justify-center px-4"
      >
        <div className="bg-white/10 backdrop-blur-sm border border-white/30 shadow-xl rounded-2xl px-6 py-10 text-center text-white max-w-2xl w-full">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Typewriter
              words={coloredWords.map((el) => el.props.children)} // Extract pure text
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h1>
          <p className="text-lg md:text-xl mb-6">
            Sculpt your body, strengthen your mind. Join us today.
          </p>
          <button className="bg-transparent shadow-2xl shadow-primary hover:backdrop-blur-3xl transition px-6 py-3 rounded-md font-semibold text-white cursor-pointer">
            Start Today
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
