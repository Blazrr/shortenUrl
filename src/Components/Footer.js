import React from 'react'
import './styles/Footer.css'
import { ReactComponent as Shortly } from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

function Footer() {
  return (
    <>
      <div className='Footer'>
        <div>
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </div>

      </div>
      <div className='links'>

        <div>
        <Shortly fill='white' stroke='white'  />
        </div>

        <div className='Features'>
          <h4>Features</h4>
          <div className='links-div'>
            <a>Link Shortening</a>
            <a>Branded Links</a>
            <a>Analytics</a>
          </div>
        </div>

        <div className='Resources'>
          <h4>Resources</h4>
          <div className='links-div'>
            <a>Blog</a>
            <a>Developers</a>
            <a>Support</a>
          </div>
        </div>

        <div className='Company'>
          <h4>Company</h4>
          <div className='links-div'>
            <a>About</a>
            <a>Our Team</a>
            <a>Careers</a>
            <a>Contact</a>
          </div>
        </div>

        <div className='logos'>
          <img  src={facebook} />
          <img  src={twitter} />
          <img  src={pinterest} />
          <img  src={instagram} />
        </div>
      </div>
    </>
  )
}

export default Footer