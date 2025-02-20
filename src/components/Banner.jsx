import React from "react";
import bannerImg from "../assets/img3.jpg";

const Banner = () => {
  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center bg-cover bg-top overflow-hidden border-t border-gray-700"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to React Mindrisers
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We are a team of passionate developers dedicated to creating
          innovative.
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Banner;
