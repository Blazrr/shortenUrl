import React, {useState, useRef} from 'react'
import './styles/Box.css'
import CopyToClipboard from 'react-copy-to-clipboard'
import { GiTargetArrows } from 'react-icons/gi'
import {ImCross} from 'react-icons/im'


export default function Box(props) {


  const [copied, setCopied] = useState(false)
  const [value, setValue] = useState('')
  const [copiedClass, setCopiedClass] = useState(false)

  function onAbc (){
    setCopiedClass(true)
    setTimeout(() => {
      setCopiedClass(false)
    }, 2000);
    
  }
  





  
  return (
   
    <div className='Box' >
      <button className='cross' onClick={props.handleDelete}><ImCross/></button>
        <h1>{props.fullLink}</h1>
        <hr/>       
        <div className='right-side'>
        <h2 >{props.shortLink} </h2>
        <CopyToClipboard text={props.shortLink} onCopy={()  => setCopied(true)}>
          <button  className={ copiedClass ? 'isClicked' : '' }  onClick={onAbc} >{copiedClass ? 'Copied !' : 'Copy'} </button>        
        </CopyToClipboard>
        </div>
    </div>
   
  )
}
