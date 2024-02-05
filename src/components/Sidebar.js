import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-gray-800 text-white">
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="text-lg font-semibold">My Dashboard</h1>
      </div>
      <ul className="py-4">
        <li className="px-6 py-2 hover:bg-gray-700">
          <a href="#">Overview</a>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="#">Analytics</a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
