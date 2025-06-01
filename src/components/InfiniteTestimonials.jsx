"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah A.",
    title: "Fitness Enthusiast",
    quote:
      "SculptArtFitness completely changed my workout journey! I feel stronger and more confident every day.",
    image: "./images/jade.jpg",
    rating: 5,
  },
  {
    name: "James M.",
    title: "Entrepreneur",
    quote:
      "I love the energy and the personalized coaching. The team is so supportive!",
    image: "./images/david.jpg",
    rating: 4,
  },
  {
    name: "Fatima T.",
    title: "Student",
    quote:
      "The programs are well-structured, and the app is super easy to use. Highly recommend!",
    image: "./images/maya.jpg",
    rating: 5,
  },
  {
    name: "Daniel K.",
    title: "Web Developer",
    quote:
      "Their routines gave me clarity and structure. The transformation is real!",
    image: "./images/alex.jpg",
    rating: 4,
  },
];

// Double the array to ensure smooth infinite scroll
// const duplicatedTestimonials = [...testimonials, ...testimonials];

export const InfiniteTestimonials = () => {
  return (
    <section className="overflow-hidden py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Loved by Our Members
      </h2>

      <div className="marquee-wrapper w-full overflow-hidden">
        <div className="marquee-track">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl min-w-[300px] max-w-sm text-center shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-2 border-primary"
              />
              <p className="text-gray-700 italic mb-3">“{item.quote}”</p>
              <div className="flex justify-center mb-2 text-yellow-400">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>
              <span className="text-sm text-gray-500">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
