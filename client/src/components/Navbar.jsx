import React, { useState, useEffect, useRef } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserDetail } from "../store/slice/UserDetailSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login", highlight: false },
  ];

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      dispatch(deleteUserDetail());
      navigate("/login");
      setIsProfileDropdownOpen(false);
      setIsMenuOpen(false); // Ensure mobile menu closes too
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight hover:text-amber-400 transition-colors duration-200">
              {import.meta.env.VITE_WEBSITE_NAME || "QuranMeet"}
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-amber-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-amber-600"
                      : "text-white hover:text-amber-400"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    } origin-left transition-transform duration-300`}
                  />
                </Link>
              );
            })}
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                aria-label="Profile Menu"
              >
                <User className="w-5 h-5" />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl z-20 animate-dropdown">
                  <Link
                    to="/profile"
                    className="block px-4 py-2.5 text-sm font-medium hover:bg-amber-100 rounded-t-lg transition-colors duration-200"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout} // Direct call
                    className="block w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-amber-100 rounded-b-lg transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-indigo-800 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`py-2 px-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-amber-500 text-white rounded-md hover:bg-amber-600 shadow-md"
                        : "text-white hover:text-amber-400 hover:bg-indigo-800"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="flex items-center w-full py-2 px-4 text-sm font-medium uppercase tracking-wide text-white hover:text-amber-400 hover:bg-indigo-800 transition-all duration-300"
                >
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </button>
                {isProfileDropdownOpen && (
                  <div className="ml-4 mt-1 flex flex-col space-y-1 animate-dropdown">
                    <Link
                      to="/profile"
                      className="py-2 px-4 text-sm font-medium text-white hover:text-amber-400 hover:bg-indigo-800 rounded-md transition-all duration-200"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsProfileDropdownOpen(false);
                      }}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout} // Direct call
                      className="py-2 px-4 text-sm font-medium text-white hover:text-amber-400 hover:bg-indigo-800 rounded-md text-left transition-all duration-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes dropdown {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        .animate-dropdown {
          animation: dropdown 0.2s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;