// App.js
import React, { useState } from 'react';
import Timer from './components/Timer';
import SwarmMember from './components/SwarmMember';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const members = ['Alice', 'Bob', 'Charlie', 'Diana'];
  const [rotate, setRotate] = useState(false);

  const handleStartTimer = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 100); // Quick reset to allow next rotation
  };

  return (
    <div className="app-container">
      <h1>Swarming Practice</h1>
      <Timer onStart={handleStartTimer} />
      <SwarmMember members={members} rotate={rotate} />
    </div>
  );
};

export default App;
