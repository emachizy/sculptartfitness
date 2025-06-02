import React from "react";
import program1 from "../assets/images/program1.webp";
import program2 from "../assets/images/program2.webp";
import program3 from "../assets/images/program3.webp";
import program4 from "../assets/images/program4.webp";
import LazyImage from "./LazyImage";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Strength Training",
    subTitle: "Build Muscle & Power",
    description:
      "Build muscle and boost power with our strength programs. Ideal for all levels.",
    image: program1,
  },
  {
    title: "Cardio Conditioning",
    subTitle: "Endurance & Fat Loss",
    description:
      "Improve endurance and burn calories with dynamic cardio.  Ideal for all fitness levels.",
    image: program2,
  },
  {
    title: "HIIT Workouts",
    subTitle: "High-Intensity Interval Training",
    description:
      "Short, intense routines to maximize fat loss. Ideal for busy schedules.",
    image: program3,
  },
  {
    title: "Yoga & Flexibility",
    subTitle: "Mindfulness & Mobility",
    description:
      "Enhance mobility, balance, and mindfulness. Perfect for all levels.",
    image: program4,
  },
  //   {
  //     title: "Core Sculpting",
  //     subTitle: "Core Strength & Posture",
  //     description: "Strengthen your core and improve posture.",
  //     image: program1,
  //   },
  //   {
  //     title: "Functional Fitness",
  //     subTitle: "Real-Life Movement",
  //     description: "Train for real-life movement and injury prevention.",
  //     image: program2,
  //   },
  //   {
  //     title: "Bodyweight Training",
  //     subTitle: "Strength Without Weights",
  //     description: "No equipment needed – just your body and focus.",
  //     image: program3,
  //   },
  //   {
  //     title: "Athlete Performance",
  //     subTitle: "Agility & Speed",
  //     description: "Boost agility, speed, and athletic ability.",
  //     image: program4,
  //   },
];

const Programs = () => {
  return (
    <section className="py-20">
      <motion.div
        className="w-full mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Training Programs
        </h2>
        <div className="grid md:grid-cols-2 bg-black">
          {programs.map((program, index) => {
            const isReversed = Math.floor(index / 2) % 2 === 1;

            const textInitialX = isReversed ? 50 : -50;
            const imageInitialX = isReversed ? -50 : 50;

            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Image Section */}
                <motion.div
                  className="w-full md:w-3/5"
                  initial={{ opacity: 0, x: imageInitialX }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <LazyImage
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full max-h-[360px] md:max-h-[480px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>

                {/* Text Section */}
                <motion.div
                  className={`w-full h-full md:w-2/5 text-start p-6 flex flex-col justify-center items-start ${
                    index % 2 === 1 ? "bg-red-500" : "bg-primary/30"
                  }`}
                  initial={{ opacity: 0, x: textInitialX }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  <p className="text-xs text-white pb-4">{program.subTitle}</p>
                  <h3 className="text-2xl font-semibold mb-2 text-white text-start">
                    {program.title}
                  </h3>
                  <p className="text-white text-start leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Programs;
