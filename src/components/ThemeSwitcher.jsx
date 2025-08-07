jsx
import React, { useContext } from "react";
import ThemeContext from "/vercel/path0/src/contexts/ThemeContext";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </motion.button>
  );
};

export default ThemeSwitcher;