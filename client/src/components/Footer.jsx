import React from 'react';
import { Star } from 'lucide-react';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-blue-900  text-white py-12 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-20"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              
              <span className="text-2xl font-serif font-bold">{import.meta.env.VITE_WEBSITE_NAME}</span>
            </div>
            <p className="text-gray-300">
              Learn the Holy Quran online with expert tutors from the comfort of your home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Register'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()==="home"?"":item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-400">Support</h3>
            <ul className="space-y-2">
              {['Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-400">Get in Touch</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: digital.rhombus.technical.ca@gmail.com</li>
              <li>Phone: +91 9821518350</li>
              <li>WhatsApp: +91 9821518350</li>
            </ul>
            <Link
              to="/register"
              className="mt-4 inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-800 text-center text-gray-300">
          <p>© {new Date().getFullYear()} {import.meta.env.VITE_WEBSITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;