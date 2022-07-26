import React from 'react'
import axios from 'axios'
import {useState, useEffect, async} from 'react'

function Textinput() {


   

    const [message, setMessage] = useState('https://twitter.com/autoass')

    const handleChange = event => {
        setMessage(event.target.value);
        console.log('value is:', event.target.value);   
      };




    const [students, setStudents] = useState('')
   
    const handleClickk = async() => {
      const data = await axios.get(`https://api.shrtco.de/v2/shorten?url=${message}`)
      setStudents(data.data.result.full_short_link)
      console.log(students)
  }
  
 
    
      

  return (
    <>
        <input placeholder='Shorten a link here...' onChange={handleChange} value={message} />
        <h1>a</h1> 
        <button onClick={handleClickk}>Shorten the url</button>
    </>
  )
}

export default Textinput