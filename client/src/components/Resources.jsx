import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourcesSection from './ResourceSection';
import hero from "../assets/design.jfif"
import {Link} from "react-router-dom"
const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50 font-sans">
  

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage:
            `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="flex justify-center mb-6"> 
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Learning Resource</h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            Explore the comprehensive resources and course materials designed to make Quran learning accessible, engaging, and effective for students of all ages.
          </p>
        </div>
      </section>

        <ResourcesSection/>
     
    </div>
  );
};

export default Resources;