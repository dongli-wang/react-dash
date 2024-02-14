import React, {Component} from 'react';
import Header from './Header';
import MainContent from './MainContent';

// -- Function Component --
// const ContentArea = () => {
//   return (
//     <div className="flex-1 flex flex-col overflow-hidden">
//       <Header />
//       <MainContent />
//     </div>
//   );
// };

// export default ContentArea;

// -- Class Component --
class ContentArea extends Component{
    render(){
      return(
        <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <MainContent />
        </div>        
      );
    }
}

export default ContentArea;
