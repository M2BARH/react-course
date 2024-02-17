import React from "react";

function App() {
    
  const [color, setColor] = React.useState('white');
  
  const handleClick = () => {
      setColor(color === 'white' ? 'red' : 'white');
  }
  
  return (
      <div>
          <p style={{color: color }}>Style me!</p>
          <button onClick={handleClick}>Toggle style</button>
      </div>
  );
}

export default App;
