import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { user_ID, userName, userAddress } = useParams();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">User Details</h1>
        <div className="space-y-3 text-lg">
          <p>
            <span className="font-semibold">ID:</span> {user_ID}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {userName}
          </p>
          {userAddress && (
            <p>
              <span className="font-semibold">Address:</span> {userAddress}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}; 

export default User;
