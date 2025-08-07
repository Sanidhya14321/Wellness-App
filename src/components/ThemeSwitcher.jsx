// src/components/ThemeSwitcher.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext"; // ✅ correct import

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-primary text-white"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </motion.button>
  );
};

export default ThemeSwitcher;
