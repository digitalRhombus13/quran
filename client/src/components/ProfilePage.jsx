import React, { useState, useEffect, useContext } from "react";
import img1 from "../assets/design.jfif"; // Background image
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "../store/slice/UserDetailSlice";
import MainContext from "../context/main";

const chapterLinks = [
  "https://drive.google.com/file/d/194J3Pa9c3QcFhw22dREm640e3zpmLq0x/view?usp=drive_link",
  "https://drive.google.com/file/d/1tz_V8ut_ZEmMsmbawaeVZxjelMigSciE/view?usp=drive_link",
  "https://drive.google.com/file/d/1OlgWdY2y7udbVTDGFBeP2RcXsh-AdSFy/view?usp=drive_link",
  "https://drive.google.com/file/d/1U6JfirKi7dJe8hlPhd_qbThkwdGBQHWm/view?usp=drive_link",
  "https://drive.google.com/file/d/1NR5CuMAyKL7CPhg9glG6QDmFkjVowbfu/view?usp=drive_link",
  "https://drive.google.com/file/d/1ZLlHvDZfjTnzXzjWk0XdGu_73hCFDcrS/view?usp=drive_link",
  "https://drive.google.com/file/d/192dJI5unaNuAdOlenoZcjuuXXre_w6n_/view?usp=drive_link",
  "https://drive.google.com/file/d/1Lw3EK9wvkyozMm78eVd23lTJvzVASmjB/view?usp=drive_link",
  "https://drive.google.com/file/d/1PswG4WbQf5tXipSEHoAh7ctwKElCUfq2/view?usp=drive_link",
  "https://drive.google.com/file/d/17Zxj-YbubvEWyoZ8Zx1Tvk-QI-oDJa6e/view?usp=drive_link",
  "https://drive.google.com/file/d/1TuDuSfbTW6iIGDfeJSXAqhbS-RYNq1Ge/view?usp=drive_link",
  "https://drive.google.com/file/d/1RU15FwX3hIkrWw4GXWgxXX1FcAGHiFn-/view?usp=drive_link",
  "https://drive.google.com/file/d/1yoA3Hy1wL6H9wBM7U8dnNEkqxYEW0mgi/view?usp=drive_link",
  "https://drive.google.com/file/d/16X-ujeqNPzi5xsYmX7JffMO9yY_wL02d/view?usp=drive_link",
  "https://drive.google.com/file/d/1UUIvkXBbCV87H5VR1C8X43rKqD_Q4boY/view?usp=drive_link",
  "https://drive.google.com/file/d/15-dhgreQOamvbgylBUwGyIiVKBD07F5A/view?usp=drive_link",
  "https://drive.google.com/file/d/1ZnFhG8wlRCTr7Jqpvtyz8FgkUVfAoh5q/view?usp=drive_link",
  "https://drive.google.com/file/d/1Jh8EvNC1--JqMxX578hUMnjPwvyc08Fk/view?usp=drive_link",
  "https://drive.google.com/file/d/16gImzWdVulpa7X9D1qeCH18h6znLkDcU/view?usp=drive_link",
  "https://drive.google.com/file/d/1d_7V0nQ5QdLNsQhXCldmN9R73XkleMb0/view?usp=drive_link",
  "https://drive.google.com/file/d/1ICRAmRhbYMLIoyW_1odyEhWhlO69t_u7/view?usp=drive_link",
  "https://drive.google.com/file/d/1-eP-tmn0QUktu-vqf6dm9Ac-5bgh3JmG/view?usp=drive_link",
  "https://drive.google.com/file/d/11KNnN9T7x3hTh7_Y3V4QQQjzZNgRlzY8/view?usp=drive_link",
  "https://drive.google.com/file/d/1zjMOidYa6sdm14-2XdrPFxedq2_NjpcI/view?usp=drive_link",
  "https://drive.google.com/file/d/1D9NIrMB4vCfrULpMWMg3qp1JkuA7Kqv8/view?usp=drive_link",
  "https://drive.google.com/file/d/1tpwSr0yM70UqD8be7wWCPe7WiPm3QX1I/view?usp=drive_link",
  "https://drive.google.com/file/d/16G_TOo_L6PWclh5D1Q_WbhtSaMXlCYIB/view?usp=drive_link",
  "https://drive.google.com/file/d/1yiHk2FSZ3K-Mm7FER5ZaCPLD4HZr9e27/view?usp=drive_link",
  "https://drive.google.com/file/d/1eOPv2wjipdzvAPBR_zHKIYSqCY4pREIi/view?usp=drive_link",
  "https://drive.google.com/file/d/1AvYWHmkgmRpo5R89GaxjxmNUZ_fCZZ2D/view?usp=drive_link",
];

const ProfilePage = () => {
  const context = useContext(MainContext);
  const { SERVER_URL } = context;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetail);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(user.name || "");
  const [completedChapters, setCompletedChapters] = useState([]);
  const totalChapters = 30;

  useEffect(() => {
    setNewName(user.name || "");
    // Fetch completed chapters from backend on mount
    const fetchCompletedChapters = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
        const response = await fetch(
          `${SERVER_URL}/api/auth/completed-chapters`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        if (response.ok && data.completedChapters) {
          setCompletedChapters(data.completedChapters);
        }
      } catch (error) {
        console.error("Error fetching completed chapters:", error);
      }
    };
    fetchCompletedChapters();
  }, [user.name, SERVER_URL]);

  const progressPercentage = Math.round(
    (completedChapters.length / totalChapters) * 100
  );

  const handleEditName = () => setIsEditingName(true);

  const handleSaveName = async () => {
    if (newName.trim() === "") {
      alert("Name cannot be empty");
      return;
    }
    try {
      const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
      const response = await fetch(`${SERVER_URL}/api/auth/update-name`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newName }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(setUserDetail({ ...user, name: newName }));
        setIsEditingName(false);
      } else {
        alert(data.message || "Failed to update name");
      }
    } catch (error) {
      console.error("Error updating name:", error);
      alert("Error connecting to server");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSaveName();
  };

  const handleToggleChapter = async (chapterIndex) => {
    const updatedChapters = completedChapters.includes(chapterIndex)
      ? completedChapters.filter((ch) => ch !== chapterIndex)
      : [...completedChapters, chapterIndex];
    setCompletedChapters(updatedChapters);

    try {
      const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
      await fetch(`${SERVER_URL}/api/auth/update-chapters`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completedChapters: updatedChapters }),
      });
    } catch (error) {
      console.error("Error updating chapters:", error);
      alert("Failed to save chapter progress");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(to bottom, rgba(254, 252, 232, 0.8), rgba(208, 250, 230, 0.8)), url(${img1}) no-repeat center/cover`,
        fontFamily: "sans-serif",
        padding: "2rem",
      }}
    >
      <style>{`
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes goldenTick { 
          0% { transform: scale(0); opacity: 0; } 
          50% { transform: scale(1.2); opacity: 1; } 
          100% { transform: scale(1); opacity: 1; } 
        }
      `}</style>

      <div
        style={{
          background: "linear-gradient(to bottom right, #065f46, #d97706)",
          padding: "3rem",
          borderRadius: "1.5rem",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
          maxWidth: "40rem",
          width: "100%",
          color: "#ffffff",
          animation: "fadeIn 1s ease-out",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "2rem",
            textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            letterSpacing: "0.05em",
          }}
        >
          Your Profile
        </h1>

        {/* User Details */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>Name: </p>
            {isEditingName ? (
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
                style={{
                  marginLeft: "0.5rem",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  fontSize: "1.25rem",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#1f2937",
                  outline: "none",
                  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.3s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow =
                    "0 0 10px rgba(245, 158, 11, 0.5)")
                }
                onBlur={(e) =>
                  (e.target.style.boxShadow =
                    "inset 0 2px 4px rgba(0, 0, 0, 0.1)")
                }
              />
            ) : (
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  marginLeft: "0.5rem",
                }}
              >
                {user.name}
              </span>
            )}
            <button
              onClick={isEditingName ? handleSaveName : handleEditName}
              style={{
                marginLeft: "1rem",
                padding: "0.5rem 1rem",
                background: "linear-gradient(to right, #f59e0b, #92400e)",
                color: "#ffffff",
                fontSize: "1rem",
                fontWeight: "600",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #d97706, #7c2d12)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #f59e0b, #92400e)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {isEditingName ? "Save" : "Edit"}
            </button>
          </div>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            Email: <span style={{ fontWeight: "400" }}>{user.email}</span>
          </p>
        </div>

        {/* Quran Chapter Progress */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "1rem",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Quran Chapter Progress
          </h2>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "1rem",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              Completed: {completedChapters.length} / {totalChapters} Chapters
            </p>
            <div
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "0.5rem",
                height: "1.5rem",
                overflow: "hidden",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  width: `${progressPercentage}%`,
                  background: "linear-gradient(to right, #f59e0b, #92400e)",
                  height: "100%",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
            <p style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
              {progressPercentage}% Complete
            </p>
          </div>
        </div>

        {/* Chapter Tracker */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "1rem",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Track Your Chapters
          </h2>
          <div
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              padding: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "1rem",
            }}
          >
            {chapterLinks.map((link, index) => {
              const chapterNumber = (index + 1).toString().padStart(2, "0");
              const isCompleted = completedChapters.includes(index);
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.5rem 0",
                    borderBottom:
                      index < chapterLinks.length - 1
                        ? "1px solid rgba(255, 255, 255, 0.2)"
                        : "none",
                  }}
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "1.125rem",
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#f59e0b")}
                    onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                  >
                    Chapter {chapterNumber}
                  </a>
                  <button
                    onClick={() => handleToggleChapter(index)}
                    style={{
                      width: "24px",
                      height: "24px",
                      background: isCompleted
                        ? "linear-gradient(to right, #f59e0b, #d97706)"
                        : "transparent",
                      border: "2px solid #f59e0b",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      transition: "background 0.3s ease",
                    }}
                  >
                    {isCompleted && (
                      <span
                        style={{
                          color: "#ffffff",
                          fontSize: "16px",
                          fontWeight: "bold",
                          animation: "goldenTick 0.5s ease-out",
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Link to PDF Chapters */}
        <a
          href="/resources/pdf-chapters"
          style={{
            display: "block",
            width: "100%",
            padding: "1.25rem",
            background: "linear-gradient(to right, #f59e0b, #92400e)",
            color: "#ffffff",
            fontSize: "1.25rem",
            fontWeight: "700",
            textAlign: "center",
            borderRadius: "0.75rem",
            textDecoration: "none",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(to right, #d97706, #7c2d12)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(to right, #f59e0b, #92400e)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Explore All Chapters
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
