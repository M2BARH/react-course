import React from 'react';

export default function App() {
    const [isSelected, setIsSelected] = React.useState();
    
    function handleClick() {
        setIsSelected(!isSelected);
    }
    
    return (
        <div>
            <p className={isSelected ? 'active' : ''}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
