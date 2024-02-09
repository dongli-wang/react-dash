import React from 'react';

const Card = ({ title, content}) => {
  
  function content(){
    if(typeof content === 'function'){
        const ContentComponent = content;
        return <ContentComponent/>
    }
    return content;
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p>{content()}</p>
    </div>
  );
};

export default Card;
