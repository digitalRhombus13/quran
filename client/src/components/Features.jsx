import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import learn1 from "../assets/learn1.webp"
import learn2 from "../assets/learn2.jfif"
import learn3 from "../assets/learn3.jfif"
import learn4 from "../assets/learn4.jfif"
import learn5 from "../assets/learn5.webp"
import learn6 from "../assets/learn6.webp"
import {toast} from "react-toastify"
import hero from "../assets/design.jfif"
import {Link} from "react-router-dom"

const Feature = () => {
  // Feature data
  const Feature = [
    {
      title: "Quran Translations",
      description:
        "Access clear and authentic translations of the Quran to understand its meaning in your preferred language.",
      image: learn1,
    },
    {
      title: "Surahs and Chapters",
      description:
        "Browse and study individual Surahs with ease, with structured chapters for reference and learning.",
      image: learn2,
    },
    {
      title: "Duas and Supplications",
      description:
        "Discover a collection of essential Duas for daily life, worship, and special occasions.",
      image: learn3,
    },
    {
      title: "Islamic Knowledge",
      description:
        "Learn fundamental Islamic teachings, including Hadiths, prayers, and spiritual guidance.",
      image: learn4,
    },
    {
      title: "Tafsir and Explanations",
      description:
        "Gain deeper insight into Quranic verses with Tafsir and scholarly interpretations.",
      image: learn5,
    },
    {
      title: "Arabic Course",
      description:
        "Build Arabic language skills to unlock a richer understanding of the Quran and Islamic knowledge.",
      image: learn6,
    }
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Quran Learning Programs</h1>
      
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-emerald-900">Quran Learning for Everyone</h2>
            <div className="w-16 h-1 bg-amber-500 mb-6 mx-auto"></div>
            <p className="text-gray-600 mb-6">
            Explore a vast collection of Quran translations, Surahs, Duas, and essential Islamic resources all in one place. Our platform provides authentic and well-organized materials to help you understand and connect with the Quran effortlessly.

Whether you’re looking for translations, supplications, or specific Surahs, our easy-to-access content ensures a smooth and enriching learning experience.

Start exploring today!            </p>
            <p className="text-gray-600 mb-6">
            </p>
            <Link
              to="/register"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transform hover:scale-105 transition duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Our Quran Learning Feature Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-2 text-emerald-900">Our Quran Learning Programs</h2>
          <div className="w-16 h-1 bg-amber-500 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Feature.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl font-serif font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;