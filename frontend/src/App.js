import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/time').then(res => res.json()).then(data => {
      console.log(data);
      setCurrentTime(data.time);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
