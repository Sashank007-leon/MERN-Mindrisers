import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-white">Learn React</h2>
        <p className="text-sm mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
