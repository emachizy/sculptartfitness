import { motion } from "framer-motion";
import { Dumbbell, Users, Apple, Clock } from "lucide-react";
import { mobileHeroImg } from "../assets/assets";

const services = [
  {
    title: "Personal Training",
    description:
      "One-on-one training tailored to your fitness level and goals.",
    icon: <Dumbbell size={32} />,
  },
  {
    title: "Group Fitness Classes",
    description:
      "Engaging group workouts that keep you motivated and accountable.",
    icon: <Users size={32} />,
  },
  {
    title: "Nutrition Coaching",
    description: "Customized diet plans to match your body type and lifestyle.",
    icon: <Apple size={32} />,
  },
  {
    title: "Flexible Schedules",
    description:
      "Train when it works for you — mornings, evenings, or weekends.",
    icon: <Clock size={32} />,
  },
];

export default function Services() {
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
            <p className="text-lg md:text-xl mb-6 font-bold">Our Services</p>
          </div>
        </motion.div>
      </div>

      <div className="min-h-screen bg-white py-16 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            At SculptArtFitness, we offer tailored fitness experiences for every
            body and every goal.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-left"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
