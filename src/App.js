import './style.css';
import Header from './Components/Header';
import Textinput from './Components/Textinput';
import Advanced from './Components/Advanced';
import Box from './Components/Box';
import {useState, useEffect} from 'react'


function App() {
  return (
    <div className="App">
      <Header/>
      <Textinput/>
      <Advanced/>
    </div>
  );
}

export default App;
