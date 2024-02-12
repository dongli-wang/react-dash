import React from 'react';

const Card = ({ title, content}) => {
  
  function renderContent(){
    if(typeof content === 'function'){
        const ContentComponent = content;
        return <ContentComponent/>
    }
    return content;
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p>{renderContent()}</p>
    </div>
  );
};

export default Card;
