import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Textinput() {


    const [post, setPosts] = useState('')

    const [message, setMessage] = useState('https://twitter.com/autoass')

    const handleChange = event => {
        setMessage(event.target.value);
        console.log('value is:', event.target.value);   
      };

    const refreshed = useEffect (() => {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${message}`)
        .then(res=>{
            console.log(res.data.result.full_short_link)
            setPosts(res.data.result.full_short_link)
            
        })
        .catch(console.log('error'))
        setPosts('try another link')
    }, [])


   

 
    
      

  return (
    <>
        <input placeholder='Shorten a link here...' onChange={handleChange} value={message} />
        <h1>{post}</h1> 
        <button onClick={refreshed}>Shorten the url</button>
    </>
  )
}

export default Textinput