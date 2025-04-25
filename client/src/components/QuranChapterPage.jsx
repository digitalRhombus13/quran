import React, { useState, useEffect,useContext } from 'react';
import heroImage from "../assets/design.jfif"; // Your imported hero image
import axios from 'axios'; // For API calls
import MainContext from '../context/main';

// Chapter links
const chapterLinks = [
  'https://drive.google.com/file/d/194J3Pa9c3QcFhw22dREm640e3zpmLq0x/view?usp=drive_link',
  'https://drive.google.com/file/d/1tz_V8ut_ZEmMsmbawaeVZxjelMigSciE/view?usp=drive_link',
  'https://drive.google.com/file/d/1OlgWdY2y7udbVTDGFBeP2RcXsh-AdSFy/view?usp=drive_link',
  'https://drive.google.com/file/d/1U6JfirKi7dJe8hlPhd_qbThkwdGBQHWm/view?usp=drive_link',
  'https://drive.google.com/file/d/1NR5CuMAyKL7CPhg9glG6QDmFkjVowbfu/view?usp=drive_link',
  'https://drive.google.com/file/d/1ZLlHvDZfjTnzXzjWk0XdGu_73hCFDcrS/view?usp=drive_link',
  'https://drive.google.com/file/d/192dJI5unaNuAdOlenoZcjuuXXre_w6n_/view?usp=drive_link',
  'https://drive.google.com/file/d/1Lw3EK9wvkyozMm78eVd23lTJvzVASmjB/view?usp=drive_link',
  'https://drive.google.com/file/d/1PswG4WbQf5tXipSEHoAh7ctwKElCUfq2/view?usp=drive_link',
  'https://drive.google.com/file/d/17Zxj-YbubvEWyoZ8Zx1Tvk-QI-oDJa6e/view?usp=drive_link',
  'https://drive.google.com/file/d/1TuDuSfbTW6iIGDfeJSXAqhbS-RYNq1Ge/view?usp=drive_link',
  'https://drive.google.com/file/d/1RU15FwX3hIkrWw4GXWgxXX1FcAGHiFn-/view?usp=drive_link',
  'https://drive.google.com/file/d/1yoA3Hy1wL6H9wBM7U8dnNEkqxYEW0mgi/view?usp=drive_link',
  'https://drive.google.com/file/d/16X-ujeqNPzi5xsYmX7JffMO9yY_wL02d/view?usp=drive_link',
  'https://drive.google.com/file/d/1UUIvkXBbCV87H5VR1C8X43rKqD_Q4boY/view?usp=drive_link',
  'https://drive.google.com/file/d/15-dhgreQOamvbgylBUwGyIiVKBD07F5A/view?usp=drive_link',
  'https://drive.google.com/file/d/1ZnFhG8wlRCTr7Jqpvtyz8FgkUVfAoh5q/view?usp=drive_link',
  'https://drive.google.com/file/d/1Jh8EvNC1--JqMxX578hUMnjPwvyc08Fk/view?usp=drive_link',
  'https://drive.google.com/file/d/16gImzWdVulpa7X9D1qeCH18h6znLkDcU/view?usp=drive_link',
  'https://drive.google.com/file/d/1d_7V0nQ5QdLNsQhXCldmN9R73XkleMb0/view?usp=drive_link',
  'https://drive.google.com/file/d/1ICRAmRhbYMLIoyW_1odyEhWhlO69t_u7/view?usp=drive_link',
  'https://drive.google.com/file/d/1-eP-tmn0QUktu-vqf6dm9Ac-5bgh3JmG/view?usp=drive_link',
  'https://drive.google.com/file/d/11KNnN9T7x3hTh7_Y3V4QQQjzZNgRlzY8/view?usp=drive_link',
  'https://drive.google.com/file/d/1zjMOidYa6sdm14-2XdrPFxedq2_NjpcI/view?usp=drive_link',
  'https://drive.google.com/file/d/1D9NIrMB4vCfrULpMWMg3qp1JkuA7Kqv8/view?usp=drive_link',
  'https://drive.google.com/file/d/1tpwSr0yM70UqD8be7wWCPe7WiPm3QX1I/view?usp=drive_link',
  'https://drive.google.com/file/d/16G_TOo_L6PWclh5D1Q_WbhtSaMXlCYIB/view?usp=drive_link',
  'https://drive.google.com/file/d/1yiHk2FSZ3K-Mm7FER5ZaCPLD4HZr9e27/view?usp=drive_link',
  'https://drive.google.com/file/d/1eOPv2wjipdzvAPBR_zHKIYSqCY4pREIi/view?usp=drive_link',
  'https://drive.google.com/file/d/1AvYWHmkgmRpo5R89GaxjxmNUZ_fCZZ2D/view?usp=drive_link',
];

const QuranChaptersPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [completedChapters, setCompletedChapters] = useState([]);
  const context = useContext(MainContext)
  const {SERVER_URL} =context; // Adjust this to your actual server URL

  // Detect screen size for responsive font size
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth >= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch completed chapters on mount
  useEffect(() => {
    const fetchCompletedChapters = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
        if (!token) return;
        
        const response = await axios.get(`${SERVER_URL}/api/auth/completed-chapters`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        const data = response.data;
        if (response.status === 200 && data.completedChapters) {
          setCompletedChapters(data.completedChapters);
        }
      } catch (error) {
        console.error("Error fetching completed chapters:", error);
      }
    };
    fetchCompletedChapters();
  }, [SERVER_URL]);

  // Generate chapters from 01 to 30
  const chapters = Array.from({ length: 30 }, (_, index) => {
    const chapterNumber = (index + 1).toString().padStart(2, "0");
    return {
      label: `Chapter ${chapterNumber}`,
      href: chapterLinks[index % chapterLinks.length],
    };
  });

  // Handle checkbox change and update backend
  const handleToggleChapter = async (chapterIndex) => {
    const updatedChapters = completedChapters.includes(chapterIndex)
      ? completedChapters.filter((ch) => ch !== chapterIndex)
      : [...completedChapters, chapterIndex];
    
    setCompletedChapters(updatedChapters);

    try {
      const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
      const response = await axios.put(
        `${SERVER_URL}/api/auth/update-chapters`,
        { completedChapters: updatedChapters },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      if (response.status !== 200) {
        throw new Error("Failed to update chapters");
      }
    } catch (error) {
      console.error("Error updating chapters:", error);
      alert("Failed to save chapter progress");
      // Revert state if update fails
      setCompletedChapters(completedChapters);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #fefce8, #d0fae6, #ffffff)',
      fontFamily: 'sans-serif',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section style={{
        position: 'relative',
        background: `url(${heroImage}) no-repeat center/cover`,
        padding: '8rem 0'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(6, 78, 59, 0.85), rgba(67, 56, 202, 0.75), rgba(6, 78, 59, 0.85))'
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
            animation: 'fadeIn 1s ease-out'
          }}>
            <div style={{
              width: '5rem',
              height: '5rem',
              backgroundColor: '#f59e0b',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.875rem',
              fontWeight: '700',
              color: '#ffffff',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease'
            }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
               onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Q
            </div>
          </div>
          <div>
            <h1 style={{
              fontSize: isSmallScreen ? "4rem" : "2.5rem",
              fontFamily: "serif",
              fontWeight: 800,
              marginBottom: "1.5rem",
              textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              letterSpacing: "0.025em",
              animation: "slideUp 1s ease-out",
            }}>
              {import.meta.env.VITE_WEBSITE_NAME || "Quran Explorer"}
            </h1>
          </div>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.75',
            animation: 'slideUp 1s ease-out 0.2s'
          }}>
            Illuminating lives with the eternal wisdom of the Holy Quran, accessible to all, anywhere, anytime.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(209, 250, 229, 0.5), transparent)'
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: '3.75rem',
            fontWeight: '800',
            textAlign: 'center',
            color: '#92400e',
            marginBottom: '4rem',
            letterSpacing: '0.025em',
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 1s ease-out'
          }}>
            Explore Quran Chapters
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem'
          }}>
            {chapters.map((chapter, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <a
                  href={chapter.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'relative',
                    background: completedChapters.includes(index)
                      ? 'linear-gradient(to bottom right, #16a34a, #15803d, #14532d)'
                      : 'linear-gradient(to bottom right, #d97706, #b45309, #065f46)',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '1.125rem',
                    textAlign: 'center',
                    padding: '1.5rem 2rem',
                    borderRadius: '1rem',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.5s ease',
                    transform: 'scale(1)',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(1deg)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 10 }}>{chapter.label}</span>
                  <span style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#f59e0b',
                    opacity: 0,
                    borderRadius: '1rem',
                    transition: 'opacity 0.3s ease'
                  }} className="hover:opacity-30"></span>
                  <span style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), transparent)',
                    opacity: 0,
                    borderRadius: '1rem',
                    transition: 'opacity 0.3s ease'
                  }} className="hover:opacity-100"></span>
                </a>
                <input
                  type="checkbox"
                  checked={completedChapters.includes(index)}
                  onChange={() => handleToggleChapter(index)}
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    zIndex: 20,
                    width: '1.25rem',
                    height: '1.25rem',
                    cursor: 'pointer'
                  }}
                />
              </div>
            ))}
          </div>
          <p style={{
            textAlign: 'center',
            color: '#4b5563',
            marginTop: '3rem',
            fontSize: '1rem',
            fontWeight: '500',
            animation: 'fadeIn 1s ease-out 0.3s'
          }}>
            Dive into any chapter with a single click—view PDFs directly on Google Drive.
          </p>
        </div>
      </section>
    </div>
  );
};

export default QuranChaptersPage;