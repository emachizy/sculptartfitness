import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-500"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 7.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
        className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-primary text-center pt-8 text-2xl font-bold"
      >
        SculptArtFitness
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
