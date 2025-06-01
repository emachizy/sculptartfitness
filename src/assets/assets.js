// import { Dumbbell, Users, Apple, Clock } from "lucide-react";
import mobile_hero1 from "../assets/images/mobile/mobile-hero1.webp";
import mobile_hero2 from "../assets/images/mobile/mobile-hero2.webp";
import mobile_hero3 from "../assets/images/mobile/mobile-hero3.webp";
// import gym_hero from "../assets/images/gym-hero.jpg";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "BMI Calculator", path: "/bmi" },
  { name: "Contact", path: "/contact" },
];

export const plans = [
  {
    title: "Daily Pass",
    price: "₦1,500",
    duration: "Per Day",
    features: ["Gym access", "1 group class", "No trainer session"],
  },
  {
    title: "Weekly Plan",
    price: "₦7,000",
    duration: "Per Week",
    features: ["Gym access", "Group classes", "1 trainer session"],
  },
  {
    title: "Monthly Plan",
    price: "₦20,000",
    duration: "Per Month",
    features: ["Gym access", "Unlimited classes", "2 trainer sessions"],
    recommended: true,
  },
  {
    title: "Quarterly Plan",
    price: "₦55,000",
    duration: "Per 3 Months",
    features: ["Gym access", "Unlimited classes", "Monthly trainer session"],
  },
  {
    title: "Yearly Plan",
    price: "₦200,000",
    duration: "Per Year",
    features: ["Gym access", "Unlimited everything", "Free fitness assessment"],
  },
];

// export const services = [
//   {
//     title: "Personal Training",
//     description:
//       "One-on-one training tailored to your fitness level and goals.",
//     icon: <Dumbbell size={32} />,
//   },
//   {
//     title: "Group Fitness Classes",
//     description:
//       "Engaging group workouts that keep you motivated and accountable.",
//     icon: <Users size={32} />,
//   },
//   {
//     title: "Nutrition Coaching",
//     description: "Customized diet plans to match your body type and lifestyle.",
//     icon: <Apple size={32} />,
//   },
//   {
//     title: "Flexible Schedules",
//     description:
//       "Train when it works for you — mornings, evenings, or weekends.",
//     icon: <Clock size={32} />,
//   },
// ];

export const team = [
  {
    name: "Coach Jade Thompson",
    title: "Head Trainer",
    img: "/images/jade.jpg",
    desc: "10+ years experience in strength and conditioning. NASM-certified with a passion for transformation.",
  },
  {
    name: "Alex Rivera",
    title: "Nutrition Expert",
    img: "/images/alex.jpg",
    desc: "Helps members build sustainable meal plans. Specializes in plant-based diets and macros.",
  },
  {
    name: "Maya Chen",
    title: "Mobility Coach",
    img: "/images/maya.jpg",
    desc: "Focuses on mobility, flexibility, and injury prevention. Believes fitness should be pain-free.",
  },
  {
    name: "David Osei",
    title: "Group Class Lead",
    img: "/images/david.jpg",
    desc: "Energizes group classes with HIIT, cardio, and community fun. Certified and motivating.",
  },
];

export const mobileHeroImg = [
  mobile_hero1,
  mobile_hero2,
  mobile_hero3,
  // gym_hero,
];
