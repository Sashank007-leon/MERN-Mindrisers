import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast(darkMode ? "Light Mode Enabled ☀️" : "Dark Mode Enabled 🌙");
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`p-4 transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="ml-10">
          <img src={logo} alt="logo" className="w-20 h-12 object-contain" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-gray-400 transition duration-300 ${
                    isActive ? "font-bold text-blue-500" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          className="ml-4 p-2 rounded-full transition duration-300 hover:bg-gray-700"
          onClick={toggleDarkMode}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4">
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-gray-400 transition duration-300 ${
                      isActive ? "font-bold text-blue-500" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme={darkMode ? "light" : "dark"}
      />
    </nav>
  );
};

export default Navbar;
