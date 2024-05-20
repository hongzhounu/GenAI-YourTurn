// Timer.js
import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import the CSS file for styling

const Timer = ({ onStart }) => {
  const [inputMinutes, setInputMinutes] = useState(5); // Default input time in minutes
  const [inputSeconds, setInputSeconds] = useState(0); // Default input time in seconds
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    if (time === 0) {
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    onStart();
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  const handleMinutesChange = (event) => {
    setInputMinutes(event.target.value);
  };

  const handleSecondsChange = (event) => {
    setInputSeconds(event.target.value);
  };

  const setTimer = () => {
    const totalSeconds = parseInt(inputMinutes) * 60 + parseInt(inputSeconds);
    setTime(totalSeconds);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="timer-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(time / (inputMinutes * 60 + inputSeconds)) * 100}%` }}></div>
      </div>
      <h1>{formatTime(time)}</h1>
      <div className="input-container">
        <input 
          type="number" 
          value={inputMinutes} 
          onChange={handleMinutesChange} 
          min="0"
          className="time-input"
        />
        <span>:</span>
        <input 
          type="number" 
          value={inputSeconds} 
          onChange={handleSecondsChange} 
          min="0"
          max="59"
          className="time-input"
        />
      </div>
      <button onClick={setTimer} className="timer-button">Set Time</button>
      <button onClick={handlePause} className="timer-button">{isActive ? 'Pause' : 'Resume'}</button>
      <button onClick={handleStart} className="timer-button start-button">Start Rotation</button>
    </div>
  );
};

export default Timer;
