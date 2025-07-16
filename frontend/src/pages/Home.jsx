import Navbar from "../components/Navbar";

const testimonials = [
  {
    name: "Amit & Priya",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We found each other on Shubh Vivah and couldn't be happier! Thank you for bringing us together.",
  },
  {
    name: "Rahul & Sneha",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The process was so easy and the matches were perfect. Highly recommended!",
  },
  {
    name: "Vikram & Anjali",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "We met, we connected, and now we're married! Shubh Vivah made it possible.",
  },
];

import { useState } from "react";

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-amber-200 to-amber-50">
        <h1 className="text-4xl md:text-6xl font-dancing text-amber-900 mb-4">Find Your Life Partner</h1>
        <p className="max-w-xl text-lg md:text-2xl text-amber-800 mb-6">Welcome to Shubh Vivah, where meaningful connections turn into lifelong journeys. Our mission is to help you find your perfect match with trust, tradition, and technology.</p>
        <div className="flex gap-4 justify-center mb-8">
          <a href="/register" className="bg-amber-700 hover:bg-amber-900 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200">Register</a>
          <a href="/login" className="bg-white border border-amber-700 text-amber-900 hover:bg-amber-100 font-semibold py-3 px-8 rounded-lg text-lg transition duration-200">Login</a>
        </div>
        {/* Carousel */}
        <div className="relative w-full max-w-xl mx-auto mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src={testimonials[current].image} alt={testimonials[current].name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-amber-300" />
            <p className="text-amber-800 italic mb-2">"{testimonials[current].text}"</p>
            <span className="font-semibold text-amber-900">- {testimonials[current].name}</span>
          </div>
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-amber-200 hover:bg-amber-300 rounded-full p-2 shadow transition duration-200">
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-amber-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-200 hover:bg-amber-300 rounded-full p-2 shadow transition duration-200">
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-amber-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
