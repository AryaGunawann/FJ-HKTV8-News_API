import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const WelcomePage = () => {
  document.title = "News";
  useEffect(() => {
    localStorage.removeItem("activeLink");
  }, []);

  const languages = ["Indonesia", "English"];
  const [selectedLanguage, setSelectedLanguage] = useState("Indonesia");
  const newsTexts = {
    Indonesia: "Selamat datang di News",
    English: "Welcome to News",
  };

  const descriptionTexts = {
    Indonesia:
      "Kami menciptakan ruang berita yang menghubungkan Anda dengan perkembangan terkini di dunia, menginspirasi wawasan dan pemahaman.",
    English:
      "We create a space of news that connects you with the latest developments in the world, inspiring insights and understanding.",
  };

  useEffect(() => {
    // Mengubah bahasa otomatis setiap 3 detik
    const interval = setInterval(() => {
      const currentIndex = languages.indexOf(selectedLanguage);
      const nextIndex = (currentIndex + 1) % languages.length;
      setSelectedLanguage(languages[nextIndex]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedLanguage, languages]);

  const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-black">
      <motion.h2
        className="mb-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      >
        <span>{newsTexts[selectedLanguage]}</span>
      </motion.h2>
      <motion.p
        className="mb-8 text-base sm:text-lg lg:text-xl font-normal text-center px-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
      >
        {descriptionTexts[selectedLanguage]}
      </motion.p>
      <motion.div
        className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
      >
        <Link
          to="/indonesia"
          className="animate-button inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-[#ff2d2d] focus:ring-4 focus:ring-blue-300"
        >
          <FaSearch className="mr-2" /> Cari Berita Indonesia
        </Link>
        <Link
          to="/Favorites"
          className="animate-button inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-300 hover.bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover-bg-gray-700 dark:focus:ring-gray-800"
        >
          <FaHeart className="mr-2" /> Lihat Berita Tersimpan
        </Link>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
