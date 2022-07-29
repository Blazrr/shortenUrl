import React from 'react'
import axios from 'axios'
import {useState, useEffect, async} from 'react'
import './styles/Textinput.css'

function Textinput() {


   

    const [message, setMessage] = useState('')
    const [urls, setUrls] = useState('')
  

    const handleChange = event => {
        setMessage(event.target.value);
        console.log('value is:', event.target.value);   
      };




    const [url, setUrl] = useState('')
   
    const handleClick = async() => {
      const data = await axios.get(`https://api.shrtco.de/v2/shorten?url=${message}`)
      setUrl(data.data.result.full_short_link)
      console.log(url)
      setUrls([urls, url ])
    }
  


  return (
    <>
        <div className='shorten-box'>
          <input placeholder='Shorten a link here...' onChange={handleChange} value={message} className='text-input'/>
          <button onClick={handleClick} className='text-button'>Shorten it!</button>
          <h1>{url}</h1>
        </div>
        
       
        

      

        
    </>
  )
}

export default Textinput