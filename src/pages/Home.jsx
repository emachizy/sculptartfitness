import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyImage from "../components/LazyImage";
import Hero from "../components/Hero";
import { InfiniteTestimonials } from "../components/InfiniteTestimonials";
import BMIModal from "../components/BMIModal";

function Home() {
  return (
    <div>
      <BMIModal />
      {/* Hero */}
      <Hero />
      <section className="bg-gray-100 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">
              Sculpt Your Body, Sculpt Your Life
            </h1>
            <p className="text-gray-600 mb-6">
              At Sculpt Art Fitness and Beauty Lounge we offer different range
              of services to help our clients keep fit, feel good and look good.
            </p>
            <Link
              to="/pricing"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              View Plans
            </Link>
          </motion.div>

          <LazyImage
            src="/images/gym-hero.jpg" // Replace with your own
            alt="Gym Hero"
            className="w-full rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why SculptArtFitness?</h2>
          <p className="text-gray-600">
            With top-tier equipment, experienced trainers, and personalized
            plans, we help you stay consistent, strong, and motivated. Our
            community-driven gym is built to support your fitness lifestyle —
            every step of the way.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "24/7 Gym Access",
              "Group Classes",
              "Personal Training",
              "Nutrition Coaching",
              "Wellness Events",
              "BMI & Health Tracking",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-4 md:px-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
        <p className="mb-6">
          Start your journey with us today — your future self will thank you.
        </p>
        <Link
          to="/bmi"
          className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition"
        >
          Check Your BMI
        </Link>
      </section>
      {/* Testimonial section */}
      <InfiniteTestimonials />
    </div>
  );
}

export default Home;
