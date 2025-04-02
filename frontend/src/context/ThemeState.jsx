import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = ({ children }) => {
  // Retrieve the dark mode preference from localStorage, defaulting to true if not found
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode !== null ? storedDarkMode : true);

  useEffect(() => {
    // Save the current dark mode preference to localStorage whenever it changes
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
