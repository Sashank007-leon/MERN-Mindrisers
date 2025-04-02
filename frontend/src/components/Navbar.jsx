import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductContext from "../context/ProductContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  const { cart } = useContext(ProductContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Apply dark mode class to <body> when toggled
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.info(darkMode ? "Light Mode Enabled ☀️" : "Dark Mode Enabled 🌙");
  };

  const handleAuthToggle = () => {
    if (localStorage.getItem("authToken")) {
      localStorage.removeItem("authToken");
      toast.success("Logged out successfully!");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "User List", path: "/userlist" },
    { name: "News", path: "/news" },
    { name: "Products", path: "/products" },
  ];

  return (
    <nav className={`p-4 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-20 h-12 object-contain" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-gray-400 transition duration-300 ${isActive ? "font-bold text-blue-500" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Dark Mode Toggle */}
          <button className="p-2 rounded-full transition duration-300 hover:bg-gray-700" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Login/Logout Button */}
          <button
            className="px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleAuthToggle}
          >
            {localStorage.getItem("authToken") ? "Logout" : "Login"}
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
                    `hover:text-gray-400 transition duration-300 ${isActive ? "font-bold text-blue-500" : ""}`
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

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
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
