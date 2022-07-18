import React from "react";

const Home = props => {
  const methodDoesNotExist = () => {
    throw new Error('自定义错误');
  };

  return (
    <div>
      <h2>Home {console.log(props)}</h2>
      Initialized on 2022-05-27 <br/>
      Use react@18.x and react-router@6.x 
      <br/>
      <br/>

      <button onClick={methodDoesNotExist}>Break the world</button>
    </div>
  );
};

export default Home;