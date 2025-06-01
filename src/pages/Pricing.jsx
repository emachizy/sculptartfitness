import { motion } from "framer-motion";
import { plans } from "../assets/assets";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Choose Your Plan
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl border p-6 shadow-sm hover:shadow-md transition ${
              plan.recommended
                ? "border-primary bg-primary/5"
                : "border-gray-200"
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-2xl font-bold text-primary mb-1">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-primary text-white font-semibold py-2 rounded-xl hover:bg-primary/90 transition">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
