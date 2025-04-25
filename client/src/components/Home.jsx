import React, { useState,useEffect } from "react";
import { BookOpen, Globe, Clock, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/design.jfif";

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate()

  // Detect screen size for responsive font size
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth >= 640); // Tailwind's 'sm' breakpoint is 640px
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const courseSlides = [
    {
      icon: <BookOpen style={{ width: "56px", height: "56px", color: "#f59e0b" }} />,
      title: "Quran Reading",
      description: "Master the art of Quranic recitation with proper Tajweed rules.",
      gradient: "linear-gradient(135deg, #fef3c7, #fcd34d)",
    },
    {
      icon: <Globe style={{ width: "56px", height: "56px", color: "#10b981" }} />,
      title: "Quran Memorization (Hifz)",
      description: "Commit the Quran to memory with expert guidance.",
      gradient: "linear-gradient(135deg, #d1fae5, #34d399)",
    },
    {
      icon: <Clock style={{ width: "56px", height: "56px", color: "#6366f1" }} />,
      title: "Quran Understanding",
      description: "Dive deep into the meanings and wisdom of the Quran.",
      gradient: "linear-gradient(135deg, #e0e7ff, #818cf8)",
    },
  ];

  const handleNextSlide = () => setActiveSlide((prev) => (prev + 1) % courseSlides.length);
  const handlePrevSlide = () => setActiveSlide((prev) => (prev - 1 + courseSlides.length) % courseSlides.length);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fef3c7, #d1fae5, #ccfbf1)",
        fontFamily: "sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <header
        id="home"
        style={{
          position: "relative",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Adjusted to full viewport height for better alignment
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(6, 78, 59, 0.9), rgba(79, 70, 229, 0.7), transparent)",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#fff",
              maxWidth: "800px", // Reduced max-width for better alignment
              textAlign: "center",
              animation: "fadeInUp 1s ease-out",
            }}
          >
            <h1
              style={{
                fontSize: isSmallScreen ? "4rem" : "2.5rem", // 1.875rem (30px) at sm and up, 3.5rem (56px) below
                fontFamily: "serif",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                marginBottom: "16px",
              }}
            >
              {import.meta.env.VITE_WEBSITE_NAME}
            </h1>
            <p
              style={{
                fontSize: "1.5rem", // Adjusted for better readability
                fontWeight: 300,
                lineHeight: "1.6",
                margin: "0 auto 32px",
                opacity: 0.9,
                maxWidth: "600px", // Constrain width for better alignment
              }}
            >
              Embark on a sacred journey to connect with the Holy Quran—anytime, anywhere.
            </p>
            
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section
        id="courses"
        style={{
          padding: "80px 0",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')",
            opacity: 0.1,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontFamily: "serif",
              fontWeight: 800,
              textAlign: "center",
              marginBottom: "48px",
              color: "#064e3b",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Sacred Learning Paths
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <button
              onClick={handlePrevSlide}
              style={{
                color: "#047857",
                fontSize: "2rem",
                transition: "transform 0.3s",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              ←
            </button>
            <div
              style={{
                maxWidth: "400px",
                background: courseSlides[activeSlide].gradient,
                boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
                borderRadius: "24px",
                padding: "32px",
                textAlign: "center",
                transition: "all 0.5s",
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              {courseSlides[activeSlide].icon}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "serif",
                  fontWeight: 600,
                  marginTop: "20px",
                  marginBottom: "12px",
                  color: "#1f2937",
                }}
              >
                {courseSlides[activeSlide].title}
              </h3>
              <p
                style={{
                  color: "#4b5563",
                  lineHeight: "1.6",
                  fontSize: "1rem",
                }}
              >
                {courseSlides[activeSlide].description}
              </p>
              <Link
                to="/resources"
                style={{
                  marginTop: "20px",
                  display: "inline-block",
                  color: "#047857",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#065f46")}
                onMouseLeave={(e) => (e.target.style.color = "#047857")}
              >
                Start Now →
              </Link>
            </div>
            <button
              onClick={handleNextSlide}
              style={{
                color: "#047857",
                fontSize: "2rem",
                transition: "transform 0.3s",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, #ccfbf1, #fff)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontFamily: "serif",
              fontWeight: 800,
              color: "#0d9488",
              textAlign: "center",
              marginBottom: "40px",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            About {import.meta.env.VITE_WEBSITE_NAME}
          </h2>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "24px",
              boxShadow: "0 15px 25px rgba(0, 0, 0, 0.1)",
              padding: "32px",
              border: "1px solid #ccfbf1",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#374151",
                lineHeight: "1.6",
                fontSize: "1rem",
              }}
            >
Our mission is to distribute and facilitate Allah’s book to the world through information technology and to facilitate reading, memorization, research, and comprehension of the Holy Quran.            </p>
           
            <button
            onClick={()=>{navigate("/register")}}
              style={{
                marginTop: "24px",
                backgroundColor: "#0d9488",
                color: "#fff",
                padding: "12px 32px",
                borderRadius: "9999px",
                fontWeight: 600,
                transition: "all 0.3s",
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0f766e")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#0d9488")}
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* How It Works & Trial Section */}
      <section
        style={{
          padding: "80px 0",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "content",
            flexWrap:"wrap",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "stretch", // Ensure both columns are the same height
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #ccfbf1, #fff)",
              borderRadius: "24px",
              boxShadow: "0 15px 25px rgba(0, 0, 0, 0.1)",
              padding: "32px",
              backdropFilter: "blur(8px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "serif",
                  fontWeight: 600,
                  color: "#0d9488",
                  marginBottom: "20px",
                }}
              >
                How It Works
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  color: "#374151",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Star style={{ width: "18px", height: "18px", color: "#0d9488" }} /> Learn from home with ease.
                </li>
                
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Star style={{ width: "18px", height: "18px", color: "#0d9488" }} /> Fast, free registration.
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Star style={{ width: "18px", height: "18px", color: "#0d9488" }} /> Full Quran & Arabic courses.
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Who Can Enroll Section */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, #fff, #ccfbf1)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              fontFamily: "serif",
              fontWeight: 800,
              color: "#0d9488",
              textAlign: "center",
              marginBottom: "40px",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Who Can Join?
          </h3>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "24px",
              boxShadow: "0 15px 25px rgba(0, 0, 0, 0.1)",
              padding: "32px",
              border: "1px solid #ccfbf1",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#374151",
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              Open to all, ages{" "}
              <span style={{ fontWeight: 700, color: "#0d9488" }}>
                4 to 75
              </span>
              . Learn at your own pace with:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  color: "#374151",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Star style={{ width: "18px", height: "18px", color: "#0d9488" }} /> Arabic letters 
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Star style={{ width: "18px", height: "18px", color: "#0d9488" }} /> Surah memorization
                </li>
              </ul>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  color: "#374151",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Star style={{ width: "18px", height: "18px", color: "#0d9488" }} />  Duas
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Star style={{ width: "18px", height: "18px", color: "#0d9488" }} /> Quran recitation & translation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(to right, #064e3b, #0d9488)",
          color: "#fff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')",
            opacity: 0.15,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontFamily: "serif",
              fontWeight: 800,
              marginBottom: "20px",
              textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            Begin Your Quranic Journey
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "32px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0.9,
            }}
          >
            Sign up today for a free trial and deepen your connection with the Quran.
          </p>
          <Link
            to="/resources"
            style={{
              backgroundColor: "#f59e0b",
              color: "#fff",
              fontWeight: 600,
              padding: "14px 40px",
              borderRadius: "8px",
              boxShadow: "0 15px 20px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#d97706")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f59e0b")}
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#064e3b",
          color: "#fff",
          padding: "32px 0",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1rem" }}>
          © 2025 {import.meta.env.VITE_WEBSITE_NAME} | All Rights Reserved
        </p>
        <p style={{ marginTop: "8px", opacity: 0.8 }}>
        digital.rhombus.technical.ca@gmail.com | +91 9821518350
        </p>
      </footer>
    </div>
  );
};

export default HomePage;