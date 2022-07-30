import React from 'react'
import './styles/Box.css'

export default function Box(props) {
  return (
    <div className='Box'>
        <h1>{props.fullLink}</h1>
        <hr/>in
        <h2>{props.shortLink}</h2>
        <button>Copy</button>
    </div>
  )
}
