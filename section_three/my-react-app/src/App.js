import React from "react";

import "./index.css";

function App() {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
}

export default App;
