import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 shadow-md px-8">
      <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add New
      </button>
    </div>
  );
};

export default Header;
