import React from 'react';

function App() {
    
    const [className, setClassName] = React.useState('');
    
    const handleClick = (newClassName) => {
        setClassName(newClassName);
    };
    
    return (
    <div id="app">
      <h1 className={`${className}`}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => handleClick('highlight-green')}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleClick('highlight-red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
