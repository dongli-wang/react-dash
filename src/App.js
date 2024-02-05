import React from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 flex h-screen">
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default App;
