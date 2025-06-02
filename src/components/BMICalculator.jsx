import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [idealWeightRange, setIdealWeightRange] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      toast.error("Please enter valid weight and height!");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const rounded = bmiValue.toFixed(1);
    setBmi(rounded);

    let categoryText = "";
    if (bmiValue < 18.5) categoryText = "Underweight";
    else if (bmiValue >= 18.5 && bmiValue < 25) categoryText = "Normal weight";
    else if (bmiValue >= 25 && bmiValue < 30) categoryText = "Overweight";
    else categoryText = "Obese";
    setCategory(categoryText);

    // Calculate ideal weight range based on healthy BMI (18.5 - 24.9)
    const minWeight = (18.5 * heightInMeters ** 2).toFixed(1);
    const maxWeight = (24.9 * heightInMeters ** 2).toFixed(1);
    setIdealWeightRange(`${minWeight}kg - ${maxWeight}kg`);

    toast.success("BMI Calculated Successfully!");
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-12 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-primary">
        BMI Calculator
      </h2>

      <motion.form
        onSubmit={calculateBMI}
        className="bg-white shadow-md p-6 rounded-xl space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            min="1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            min="1"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition"
        >
          Calculate BMI
        </motion.button>
      </motion.form>

      {bmi && (
        <motion.div
          className="mt-6 text-center bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xl font-semibold">Your BMI: {bmi}</p>
          <p className="text-lg mt-2 text-gray-700">
            Category: <span className="font-bold text-primary">{category}</span>
          </p>

          {/* Ideal Weight Range */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">Ideal Weight Range:</p>
            <p className="text-lg font-medium">{idealWeightRange}</p>
          </div>
        </motion.div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default BMICalculator;
BMICalculator.displayName = "BMICalculator";
