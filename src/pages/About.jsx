"use client";

import { motion } from "framer-motion";
import { HeartPulse, Users, Flame, Target } from "lucide-react";
import { mobileHeroImg, team } from "../assets/assets";
import LazyImage from "../components/LazyImage";

const features = [
  {
    icon: <HeartPulse size={28} />,
    title: "Holistic Wellness",
    desc: "We focus on both physical strength and mental well-being.",
  },
  {
    icon: <Flame size={28} />,
    title: "Results-Driven",
    desc: "Our programs are tailored to produce real, lasting results.",
  },
  {
    icon: <Target size={28} />,
    title: "Goal-Oriented Plans",
    desc: "Each member gets a plan that aligns with their personal fitness goals.",
  },
  {
    icon: <Users size={28} />,
    title: "Supportive Community",
    desc: "You're never alone — our team and members lift together.",
  },
];

function About() {
  return (
    <section className="min-h-screen bg-white ">
      <div className="relative h-[30vh] md:h-[60vh] w-full">
        {/* Background Image Slider */}

        <img
          src={mobileHeroImg[1]} // Assuming you want the first image for the background
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
            <p className="text-lg md:text-xl mb-6 font-bold">About Us</p>
          </div>
        </motion.div>
      </div>
      <div className="py-16 md:px-10 px-4">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 "
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About SculptArtFitness
          </h1>
          <p className="text-gray-600 text-lg">
            Empowering people to sculpt their best selves through fitness,
            discipline, and support.
          </p>
        </motion.div>

        {/* Features */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl text-center"
            >
              <div className="text-primary mb-3 mx-auto">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            SculptArtFitness began as a small community of people striving to be
            stronger — not just physically, but mentally and emotionally. What
            started as a local gym quickly grew into a thriving ecosystem of
            transformation. Today, we help hundreds reach their potential
            through evidence-based training, community motivation, and
            personalized coaching.
          </p>

          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            Whether you're a beginner or a competitive athlete, we welcome all
            who are ready to put in the work. We believe fitness should be
            inclusive, enjoyable, and sustainable — that's the SculptArt way.
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Leadership
          </h2>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <LazyImage
                  src="/images/ceo.jpg"
                  alt="CEO Portrait, Moyosoreoluwa Alejo"
                  className="w-38 h-38 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Moyosoreoluwa Alejo
                </h3>
                <p className="text-primary font-semibold mb-4">Founder & CEO</p>

                <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-4">
                  "Fitness transformed my life, and I founded SculptArtFitness
                  to share that transformation with others. Every person who
                  walks through our doors has unlimited potential — our job is
                  to help them unlock it."
                </blockquote>

                <p className="text-gray-600 text-sm">
                  With over 15 years in fitness and wellness, Sarah holds
                  certifications in personal training, nutrition coaching, and
                  sports psychology. She's passionate about creating inclusive
                  spaces where everyone can thrive.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mt-20 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Our trainers and wellness coaches are passionate, certified, and
            ready to support your fitness journey.
          </p>

          <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-4"
              >
                <LazyImage
                  src={member.img}
                  alt={member.name}
                  className="w-full h-44 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-1">{member.title}</p>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
