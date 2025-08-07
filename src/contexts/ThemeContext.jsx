import React, { createContext, useState, useContext, useEffect } from 'react';

// Define basic theme palettes
const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#007bff',
    secondary: '#6c757d',
  },
  dark: {
    background: '#343a40',
    text: '#ffffff',
    primary: '#0056b3',
    secondary: '#5a6268',
  },
};

// Create the context
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = themes[theme];

  // Apply theme CSS variables to the document body
  useEffect(() => {
    const body = document.body;
    if (body) {
      body.style.setProperty('--background-color', currentTheme.background);
      body.style.setProperty('--text-color', currentTheme.text);
      body.style.setProperty('--primary-color', currentTheme.primary);
      body.style.setProperty('--secondary-color', currentTheme.secondary);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ✅ Named exports only — no default
export { ThemeProvider, useTheme, ThemeContext };
