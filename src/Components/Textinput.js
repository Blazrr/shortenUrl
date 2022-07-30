import React from 'react'
import axios from 'axios'
import { useState, useEffect, async } from 'react'
import './styles/Textinput.css'
import Box from './Box'

function Textinput() {




  const [message, setMessage] = useState('')
  const [data, updateData] = useState([]); //tableau contenant les urls

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = async () => {
    const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${message}`)
    updateData(arr => [...arr, res]);
  }

  return (
    <>
      <div className='shorten-box'>
        <input placeholder='Shorten a link here...' onChange={handleChange} value={message} className='text-input' />
        <button onClick={handleClick} className='text-button'>Shorten it!</button>
      </div>

      {
          data.map((mess, idx) => {
            return <Box
              key={idx}  
              fullLink={mess.data.result.original_link}
              shortLink={mess.data.result.short_link}
            />
          })
        }

    </>
  )
}

export default Textinput