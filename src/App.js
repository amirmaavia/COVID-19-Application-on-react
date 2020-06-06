import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Livestat from './components/Livestat.js'
import Contries from './components/Contries.js'

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1 style={{fontFamily: "bold"}} >Covid-18</h1>
    <Livestat />
    <Contries />
    </div>
  );
}

export default App;
