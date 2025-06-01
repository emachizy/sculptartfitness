import { motion } from "framer-motion";
import { HeartPulse, Users, Flame, Target } from "lucide-react";
import { team } from "../assets/assets";
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
    <div className="min-h-screen bg-white py-16 px-4 md:px-10">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
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
          transformation. Today, we help hundreds reach their potential through
          evidence-based training, community motivation, and personalized
          coaching.
        </p>

        <p className="mt-6 text-gray-600 text-base leading-relaxed">
          Whether you’re a beginner or a competitive athlete, we welcome all who
          are ready to put in the work. We believe fitness should be inclusive,
          enjoyable, and sustainable — that’s the SculptArt way.
        </p>
      </motion.div>
      {/* Team Section */}
      <motion.div
        className="mt-20 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Our trainers and wellness coaches are passionate, certified, and ready
          to support your fitness journey.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
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
  );
}

export default About;
