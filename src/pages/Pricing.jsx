import { motion } from "framer-motion";
import { mobileHeroImg, plans } from "../assets/assets";
import { toast } from "react-toastify";

const Pricing = () => {
  const handleClick = (plan) => {
    const phoneNumber = "2349012345678"; // ✅ Your WhatsApp number
    const message = `Hello, I'm interested in the ${plan.title} (${plan.price} - ${plan.duration}) plan.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast.info("Redirecting to WhatsApp...", { toastId: "whatsapp-toast" });

    // Redirect after short delay
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 1000);
  };

  return (
    <section>
      <div className="relative h-[30vh] md:h-[60vh] w-full">
        {/* Background Image Slider */}

        <img
          src={mobileHeroImg[0]} // Assuming you want the first image for the background
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
            <p className="text-lg md:text-xl mb-6 font-bold">Select a Plan</p>
          </div>
        </motion.div>
      </div>

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
              <p className="text-2xl font-bold text-primary mb-1">
                {plan.price}
              </p>
              <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleClick(plan)}
                className="mt-6 w-full bg-primary text-white font-semibold py-2 rounded-xl hover:bg-primary/90 transition"
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
