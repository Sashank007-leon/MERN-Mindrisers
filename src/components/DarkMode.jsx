import React, { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center justify-center p-5">
      <div
        className={`w-full max-w-sm p-6 text-center rounded-lg shadow-lg cursor-pointer transition-all duration-500 ${
          darkMode ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <h1 className="text-xl font-semibold">
          {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </h1>
        <p className="mt-2">
          Click to toggle theme
        </p>
      </div>
    </div>
  );
};

export default DarkMode;
