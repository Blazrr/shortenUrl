import React from 'react'
import './styles/Advanced.css'

function Advanced() {
  return (
    <div className='advanced'>
        <h1>Advanced statistics</h1>
        <h4>Track how your links are performing across the web with our advanced statistics dashboard</h4>
        <div className='cards'>

          <div className='brand card'>
            <h3>Brand recognition</h3>
            <p> Boost your brand recognition with each click. Generic linksn't mean a thing. Branded links help instil 
                confidence in your content.
              </p>

          </div>

          <div className='detailed card'>
            <h3>Detailed Records</h3>
            <p>
              Gain insight into who is clicking your links. Knowing when and where people engage with your content helps
              inform better decisions.
            </p>
          </div>

          <div className='fully card'>
            <h3>Fully customizable</h3>
            <p>
              Improve your brand awareness and content discoverability through customizable links supercharching audience engagement.
            </p>

          </div>

        </div>

    </div>
  )
}

export default Advanced