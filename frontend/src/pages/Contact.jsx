import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const messageUpperCase = () => {
    setMessage(message.toUpperCase());
  };

  const messageLowerCase = () => {
    setMessage(message.toLowerCase());
  };

  const messageCopy = () => {
    navigator.clipboard.writeText(message);
  };

  const messageClear = () => {
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="max-w-4xl w-full text-center px-4 py-10">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-400 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-10">Have questions? Get in touch with us!</p>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
          {[
            {
              icon: <Mail size={32} className="text-blue-400" />,
              title: "Email",
              info: "contact@reactlearners.com",
            },
            {
              icon: <Phone size={32} className="text-green-400" />,
              title: "Phone",
              info: "123-456-789",
            },
            {
              icon: <MapPin size={32} className="text-red-400" />,
              title: "Location",
              info: "Kathmandu",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              {item.icon}
              <div>
                <h2 className="text-xl font-semibold text-gray-200">{item.title}</h2>
                <p className="text-gray-400">{item.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-xl max-w-lg mx-auto mt-8">
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">Send us a message</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {/* Uppercase Button */}
            <button
              type="button"
              onClick={messageUpperCase}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Uppercase Message
            </button>

            {/* Lowercase Button */}
            <button
              type="button"
              onClick={messageLowerCase}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Lowercase Message
            </button>

            {/* Copy message Button */}
            <button
              type="button"
              onClick={messageCopy}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Copy Message
            </button>

            {/* Clear message Button */}
            <button
              type="button"
              onClick={messageClear}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Clear Message
            </button>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
