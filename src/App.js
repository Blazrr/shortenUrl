import './style.css';
import Header from './Components/Header';
import Textinput from './Components/Textinput';
import Box from './Components/Box';
import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="App">
      <Header/>
      <Textinput/>
    </div>
  );
}

export default App;
