import React from "react";
import BMICalculator from "../components/BMICalculator";
import BMICategories from "../components/BMICategories";

const BMIPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        BMI Calculator
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <BMICalculator />
        <BMICategories />
      </div>
    </div>
  );
};

export default BMIPage;
