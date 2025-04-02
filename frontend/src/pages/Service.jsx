import React from "react";
import { Code, BookOpen, Users, Rocket } from "lucide-react"; // Icons for better UI

const Service = () => {
  const services = [
    {
      title: "React Fundamentals",
      description: "Learn the basics of React, including components, props, and state.",
      icon: <BookOpen size={40} className="text-blue-400" />,
    },
    {
      title: "Advanced React",
      description: "Master hooks, context API, and performance optimization techniques.",
      icon: <Code size={40} className="text-green-400" />,
    },
    {
      title: "Live Coding Sessions",
      description: "Join interactive coding sessions to build real-world React applications.",
      icon: <Users size={40} className="text-purple-400" />,
    },
    {
      title: "Project-Based Learning",
      description: "Work on hands-on projects to apply React skills in practical scenarios.",
      icon: <Rocket size={40} className="text-yellow-400" />,
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl font-bold text-blue-400 mb-6">Our Services</h1>
        <p className="text-lg text-gray-300 mb-10">
          We offer top-notch React training with a focus on practical learning and real-world projects.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-lg flex items-start space-x-4 
                         transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div>{service.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold text-blue-300">{service.title}</h2>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
