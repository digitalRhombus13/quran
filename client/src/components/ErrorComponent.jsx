import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import {Link} from "react-router-dom"
const ErrorComponent = ({
  message = "Oops! It seems you've wandered off the path.",
  onRetry,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-emerald-50 p-4 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>

      <div className="relative max-w-lg w-full bg-white shadow-2xl rounded-2xl p-8 text-center transform transition-all duration-300 hover:shadow-3xl">
        {/* Decorative Star */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        </div>

        {/* Quran Book Icon */}
        <div className="flex justify-center mb-6">
          <BookOpen className="text-emerald-600" size={64} />
        </div>

        {/* Error Title */}
        <h2 className="text-3xl font-serif font-bold mb-4 text-emerald-700">
          Page Not Found
        </h2>

        {/* Error Message */}
        <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
          {message} Let's guide you back to your Quran learning journey.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="w-full inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300"
        >
          Return to Home
        </Link>

        {/* Optional Retry Button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300"
          >
            Try Again
          </button>
        )}

        {/* Support Info */}
        <div className="mt-8 text-sm text-gray-500 border-t border-gray-200 pt-4">
          <p className="font-medium">
            Lost? Contact us to find your way back to learning.
          </p>
          <p className="mt-2">
            Email:{' '}``
            <Link
              to="mailto:digital.rhombus.technical.ca@gmail.com"
              className="text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              digital.rhombus.technical.ca@gmail.com
            </Link>
          </p>
          <p>
            WhatsApp:{' '}
            <Link
              to="https://wa.me/919821518350"
              className="text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              +1 (555) 123-4567
            </Link>



            
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;