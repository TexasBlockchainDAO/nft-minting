import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleClick() {
    setIsPopupOpen(true);
  }

  function handleClose() {
    setIsPopupOpen(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Open Pop Up</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Pop Up Content Goes Here</h2>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
