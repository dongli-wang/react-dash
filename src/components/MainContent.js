import React from 'react';
import Card from './Card'; // Assume Card is another component you will create

const MainContent = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Card */}
        <Card title="Monthly Sales" content="Compared to last month, our sales have increased by 25%." />
        {/* Add more Card components as needed */}
      </div>
      {/* Additional content */}
    </div>
  );
};

export default MainContent;
