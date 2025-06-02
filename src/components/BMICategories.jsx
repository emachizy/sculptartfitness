import React from "react";

const categories = [
  { label: "Underweight", range: "< 18.5", color: "bg-yellow-300" },
  { label: "Normal weight", range: "18.5 – 24.9", color: "bg-green-400" },
  { label: "Overweight", range: "25 – 29.9", color: "bg-orange-400" },
  { label: "Obesity Class I", range: "30 – 34.9", color: "bg-red-400" },
  { label: "Obesity Class II", range: "35 – 39.9", color: "bg-red-600" },
  { label: "Obesity Class III", range: "≥ 40", color: "bg-red-800" },
];

const BMICategories = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        BMI Categories
      </h2>
      <table className="w-full table-auto text-left border-collapse">
        <thead>
          <tr className="text-white bg-primary">
            <th className="p-2">Category</th>
            <th className="p-2">BMI Range</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={index} className={`text-sm`}>
              <td className={`p-2 font-medium ${cat.color} text-black`}>
                {cat.label}
              </td>
              <td className={`p-2 border ${cat.color} text-black`}>
                {cat.range}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BMICategories;
