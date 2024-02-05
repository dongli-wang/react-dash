import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

const ContentArea = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <MainContent />
    </div>
  );
};

export default ContentArea;
