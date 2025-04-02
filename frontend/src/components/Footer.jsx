import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Learn React with Mindrisers</h2>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition text-2xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
