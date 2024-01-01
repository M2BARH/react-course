import React from 'react';

export default function App() {
    const [price, setDiscountPrice] = React.useState("$100");
    
    function applyDiscountPrice() {
        setDiscountPrice("$75");
    }
    
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={applyDiscountPrice}>Apply Discount</button>
        </div>
    );
}
