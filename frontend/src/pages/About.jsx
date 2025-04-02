import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext); // Get dark mode state

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-500 `}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 text-blue-500">About Us</h1>
        <p className="text-lg lg:text-xl mb-8">
          We are passionate about teaching React and helping developers build
          amazing projects!
        </p>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Mission Section */}
          <div className="p-6 rounded-xl shadow-lg transition transform hover:scale-105 md:hover:scale-110 bg-opacity-80 bg-gradient-to-r from-blue-500 to-blue-700">
            <h2 className="text-3xl font-semibold mb-3 text-white">
              Our Mission
            </h2>
            <p className="text-white">
              Our mission is to make learning React simple, fun, and
              interactive. Whether you're a beginner or an experienced
              developer, we provide structured guidance to help you master
              React.
            </p>
          </div>

          {/* What We Offer */}
          <div className="p-6 rounded-xl shadow-lg transition transform hover:scale-105 md:hover:scale-110 bg-opacity-80 bg-gradient-to-r from-blue-500 to-blue-700">
            <h2 className="text-3xl font-semibold mb-3 text-white">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Beginner-friendly React tutorials</li>
              <li>Hands-on projects and exercises</li>
              <li>Advanced concepts like Hooks, Context API, and Redux</li>
              <li>Live coding sessions and community support</li>
            </ul>
          </div>

          {/* Why Choose Us? */}
          <div className="p-6 rounded-xl shadow-lg transition transform hover:scale-105 md:hover:scale-110 bg-opacity-80 bg-gradient-to-r from-blue-500 to-blue-700">
            <h2 className="text-3xl font-semibold mb-3 text-white">
              Why Choose Us?
            </h2>
            <p className="text-white">
              We believe in{" "}
              <span className="font-semibold text-yellow-300">
                learning by doing
              </span>
              . Our approach is practical, with real-world projects that give
              you hands-on experience. Join us and become a React expert!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
