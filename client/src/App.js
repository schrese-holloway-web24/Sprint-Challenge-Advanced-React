import React from 'react';
import './App.css';

//components
import Players from './Components/Players';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Players />
    </div>
  );
}

export default App;
