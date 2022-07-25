import './style.css';
import Header from './Components/Header';
import Textinput from './Components/Textinput';
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
