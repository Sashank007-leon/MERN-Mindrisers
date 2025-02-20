import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Contact"]

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="ml-10">
          <img src={logo} alt="logo" className="w-20 h-12 object-contain" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4">
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
