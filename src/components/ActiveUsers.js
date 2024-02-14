import { Component, useState, useEffect } from 'react';

// const ActiveUsers = () => {
//   // useState Hook用于在组件内部创建一个状态变量userCount和一个设置该变量的函数setUserCount
//   const [userCount, setUserCount] = useState('Loading...');
//   // useEffect Hook用于处理副作用，例如在组件挂载后定时更新用户数
//   useEffect(() => {
//     const updateData = () => {
//       // 模拟从服务器获取的活跃用户数
//       const newUserCount = 'Users: ' + Math.floor(Math.random() * 10000);
//       setUserCount(newUserCount); // 更新状态变量userCount
//     };

//     updateData(); // 组件挂载后立即更新一次用户数

//     // 设置定时器，每5秒调用updateData函数更新用户数
//     const intervalId = setInterval(updateData, 5000);

//     // 返回一个清理函数，React会在组件卸载时调用它
//     // 清理函数用于清除定时器，避免内存泄漏
//     return () => clearInterval(intervalId);
//   }, []); // 依赖项数组为空，表示这个副作用只在组件挂载和卸载时运行

//   return (
//    [userCount]
//   );
// };

// export default ActiveUsers;

class ActiveUsers extends Component{
   constructor(props){
      super(props);
      this.state = {
        userContent:'Loading ...'
      }
   }
  
   //life circle function -> componentDidMount, it will be invoked when component mounted
  componentDidMount(){
     this.updateData();
     this.intervalId = setInterval(this.updateData,5000);
  }
  
  //life circle function -> componentWillUnmount,it will be invoked just before the component unmounted
  componentWillUnmount(){
     clearInterval(this.intervalId);
  } 

  updateData = ()=>{
    const newUserCount = 'Users: ' + Math.floor(Math.random() * 10000);
    this.setState({userContent:newUserCount}); // 更新状态变量userCount
    //console.log("this->"+this.state.userContent);
  }

   render(){
      return(
        [this.state.userContent]
      );
   }
}

export default ActiveUsers;
