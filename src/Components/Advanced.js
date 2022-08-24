import React from 'react'
import './styles/Advanced.css'
import brand from '../images/icon-brand-recognition.svg'
import detailed from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'


function Advanced() {
  return (
    <div className='advanced'>
        <h1>Advanced statistics</h1>
        <h4>Track how your links are performing across the web with our advanced statistics dashboard</h4>
        <div className='cards'>

          <div className='brand card'>
            <div className='image-div'><img  src={brand}  /></div>
            <h3>Brand recognition</h3>
            <p> Boost your brand recognition with each click. Generic linksn't mean a thing. Branded links help instil 
                confidence in your content.
              </p>

          </div>

          <div className='detailed card'>
          <div className='image-div'><img  src={detailed}  /></div>
            <h3>Detailed Records</h3>
            <p>
              Gain insight into who is clicking your links. Knowing when and where people engage with your content helps
              inform better decisions..
            </p>
          </div>

          <div className='blue-line'></div>

          <div className='fully card'>
          <div className='image-div'><img  src={fully}  /></div>
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