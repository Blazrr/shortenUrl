import React from 'react'
import axios from 'axios'
import { useState, useEffect, async } from 'react'
import './styles/Textinput.css'
import Box from './Box'

function Textinput() {
  const [message, setMessage] = useState('')
  const [data, updateData] = useState([]); //tableau contenant les urls
  const [addClass, setAddClass] = useState(true)
 
  
 
  



  const handleChange = event => {
    setMessage(event.target.value);
    if (event.target.value.trim().length !== 0) {
      console.log('input value is NOT empty');
      setAddClass(false)
    } else {
      console.log('input value is empty');
      setAddClass(true)
      
    }
  };

  const handleClick = async () => {
    const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${message}`)
    console.log(res.data.result.short_link)
    updateData(arr => [...arr, res]);
    setMessage('')
  }

  const deleteData = (evt, idx) => {
    updateData(data.filter((image) => image.idx !== idx));
  };


  
  return (
    <>
      <div className='shorten-box'>
        <input placeholder='Shorten a link here...' onChange={handleChange} value={message} className='text-input' />
        <button onClick={handleClick} className='text-button'>Shorten it! </button>
        <span> {addClass ? 'Please enter an URL' : ''} </span>
      </div>

    {data.map((mess, idx) => {
        mess.idx = idx
      return<Box
        key={idx}  
        fullLink={mess.data.result.original_link}
        shortLink={mess.data.result.short_link}      
        handleDelete={ (e) => deleteData(e, idx)}
      />
    })}


    </>
  )
}

export default Textinput