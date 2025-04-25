// HolyQuran.jsx
import React, { useState, useEffect, useContext } from "react";
import { Speaker } from "lucide-react";
import axios from "axios";
import MainContext from "../context/main";

const HolyQuran = () => {
  const [selectedSurah, setSelectedSurah] = useState("Al-Fatiha");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [surahs, setSurahs] = useState([]);
  const context = useContext(MainContext);
  const { SERVER_URL } = context || {};

  // Language code mapping for speech
  const languageMap = {
    English: "en-US",
    Urdu: "ur-PK",
    French: "fr-FR",
    Spanish: "es-ES",
    Hindi: "hi-IN",
  };

  const languages = ["English", "Urdu", "French", "Spanish", "Hindi"];

  // Fetch Surahs from the backend
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/surahs`);
        const sortedSurahs = response.data.sort((a, b) => a.no - b.no);
        setSurahs(sortedSurahs);
      } catch (error) {
        console.error("Error fetching Surahs:", error);
      }
    };
    if (SERVER_URL) {
      fetchSurahs();
    }
  }, [SERVER_URL]);

  // Find the selected Surah with fallback
  const currentSurah = surahs.find((surah) => surah.name === selectedSurah) || {
    name: "Loading...",
    verses: [],
  };

  // Text-to-Speech function with error handling
  const speakText = (text, lang) => {
    if (!window.speechSynthesis || selectedLanguage === "Urdu") return;
    if (!text) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageMap[lang] || "en-US";
    utterance.rate = 0.8;
    
    utterance.onerror = (event) => {
      console.error("Speech synthesis error:", event.error);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  // Helper function to determine if speaker should be shown
  const showSpeaker = (text) => {
    return text && selectedLanguage !== "Urdu";
  };

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-emerald-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-800 mb-12">
          Holy Quran
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <label htmlFor="surah-select" className="text-gray-700 font-medium">
              Choose Sura:
            </label>
            <select
              id="surah-select"
              value={selectedSurah}
              onChange={(e) => setSelectedSurah(e.target.value)}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {surahs.length > 0 ? (
                surahs.map((surah) => (
                  <option key={surah.name} value={surah.name}>
                    {surah.no.toString().padStart(3, '0')}. {surah.name}
                  </option>
                ))
              ) : (
                <option value="">Loading surahs...</option>
              )}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="language-select" className="text-gray-700 font-medium">
              Choose Language:
            </label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border-4 border-amber-200 relative">
          <div className="absolute inset-0 border-4 border-amber-400 rounded-lg pointer-events-none">
            <div className="absolute inset-0 border-2 border-amber-300 rounded-lg m-1" />
          </div>

          <h2 className="text-2xl font-serif font-bold text-center text-gray-800 mb-6">
            {currentSurah.no && `${currentSurah.no.toString().padStart(3, '0')}. `}{currentSurah.name}
          </h2>

          <div className="space-y-8">
            {currentSurah.verses.length > 0 ? (
              currentSurah.verses.map((verse, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-amber-500 text-white rounded-full text-sm font-bold">
                    {index + 1}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-left text-xl font-arabic text-gray-800 leading-relaxed">
                        {verse.arabic || "Arabic text not available"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-left text-gray-600 italic">
                        {verse.transliteration || "Transliteration not available"}
                      </p>
                      <button
                        onClick={() => speakText(verse.transliteration, "en-US")}
                        className="text-amber-600 hover:text-amber-800 transition"
                        aria-label="Play transliteration"
                        disabled={!verse.transliteration}
                      >
                        <Speaker className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-left text-gray-600">
                        [{index + 1}] {verse.translations?.[selectedLanguage] || "Translation not available"}
                      </p>
                      {showSpeaker(verse.translations?.[selectedLanguage]) && (
                        <button
                          onClick={() => speakText(verse.translations?.[selectedLanguage], selectedLanguage)}
                          className="text-amber-600 hover:text-amber-800 transition"
                          aria-label="Play translation"
                        >
                          <Speaker className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No verses available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolyQuran;