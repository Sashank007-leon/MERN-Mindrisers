import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const users = [
    {
      _id: 1,
      name: "John",
      address: "Kathmandu",
    },
    {
      _id: 2,
      name: "Rohan",
      address: "Pokhara",
    },
    {
      _id: 3,
      name: "Bijaya",
      address: "Boudha",
    },
    {
      _id: 4,
      name: "Aryash",
      address: "Biratnagar",
    },
  ];

  const handleUserClick = (user_ID, userName, userAddress) => {
    navigate(`/${user_ID}/${userName}/${encodeURIComponent(userAddress)}`);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
          User List
        </h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user._id}
              className="p-4 bg-gray-700 rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 hover:bg-blue-500 hover:text-white transform hover:scale-105"
              onClick={() => handleUserClick(user._id, user.name, user.address)}
            >
              <span className="text-lg font-semibold">{user.name}</span>
              <span className="text-sm text-gray-300">{user.address}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
