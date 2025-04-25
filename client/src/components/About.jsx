import React from 'react';
import { Star, BookOpen, Users, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img1  from "../assets/circle.jfif"
import img2 from "../assets/design3.webp"
import img3 from "../assets/design.jfif"
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50 font-sans">

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: `url(${img3})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About {import.meta.env.VITE_WEBSITE_NAME}</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Dedicated to illuminating lives through the timeless wisdom of the Holy Quran, accessible to all, anywhere, anytime.
          </p>
        </div>
      </section>

      {/* Online Quran Tutors Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={img2}
                alt="Mosque minaret under starry sky"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-900 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-500" />
                Online Quran Tutors
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {import.meta.env.VITE_WEBSITE_NAME} is a leading and exclusive Online Tutoring & Distance learning academy. Our mission is to distribute and facilitate Allah’s book to the world through information technology and to facilitate reading, memorization, research, and comprehension of the Holy Quran. We provide one-to-one Online Quran Reading Education Plus Basic Islamic Teachings to all individuals ranging from the age of 4 to 70. Our initial aim is to form Qualified Tutor teams that can serve every type of person who wants to read and understand Quran with Translation at an affordable remuneration staying anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Quran Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-emerald-900 flex items-center gap-3">
                
                Online Quran Services
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-md">Our Mission</span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our mission is to literate the World with the knowledge of Quran. Provide live Quran Classes for those Muslims who are away from Home lands and from Islamic centers. Our goal is to spread the message of the Holy Quran to all mankind (Muslims and non-Muslims) throughout this world. May Allah help us in the fulfillment of our mission.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-md">Our Vision</span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Your feedback and response will encourage us to move ahead in the right direction. Your suggestions will always be welcomed in this regard.
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={img1}
                alt="Islamic pattern"
                className="w-64 h-64 object-cover rounded-full shadow-lg opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-emerald-900">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-amber-500" />,
                title: 'Excellence in Teaching',
                description: 'Our certified tutors bring deep knowledge and passion to every lesson.',
              },
              {
                icon: <Users className="w-12 h-12 text-emerald-500" />,
                title: 'Community & Support',
                description: 'We foster a global community of learners with dedicated support.',
              },
              {
                icon: <Clock className="w-12 h-12 text-indigo-500" />,
                title: 'Flexible Learning',
                description: 'Study at your own pace, from anywhere in the world.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-indigo-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl font-serif font-bold mb-6">Join Our Quran Learning Family</h2>
          <p className="text-xl mb-8 font-light max-w-2xl mx-auto">
            Start your journey with us today and experience the beauty of learning the Quran online.
          </p>
          <a
            href="/resources"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Register Now
          </a>
        </div>
      </section>

 
    </div>
  );
};

export default About;