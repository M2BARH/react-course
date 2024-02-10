import React from 'react';

function App() {
    
    const [color, setColor] = React.useState('white');
    
    const handleClick = (newColor) => {
        setColor(newColor);
    };
    
    return (
    <div id="app">
      <h1 style={{color}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleClick('green')}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleClick('red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
