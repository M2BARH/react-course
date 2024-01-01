import React from 'react';

export default function App() {
    const [showAlert, setShowAlert] = React.useState();
    
    function handleDelete() {
        setShowAlert(!showAlert);
    }
    
    function handleProceed() {
        setShowAlert(false);
    }
    
    return (
      <div>
        {!showAlert ? <button onClick={handleDelete}>Delete</button> : (
            <div data-testid="alert" id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick={handleProceed}>Proceed</button>
            </div>
            )
        }
      </div>    
    );
}