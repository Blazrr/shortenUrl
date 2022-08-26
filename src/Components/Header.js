import React from 'react'
import logo from '../images/logo.svg'
import illustration from '../images/illustration-working.svg'
import hamburger from '../images/icon-brand-recognition.svg'
import { useState } from 'react'
import Mobilenavbar from './Mobilenavbar'
import {GiHamburgerMenu, GiCrossedSabres} from 'react-icons/gi';


export default function Header() {

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
    <div className='Header'>
       <a href='google.com'><img className='logo' src={logo}  /></a> 


        <div className='navbar ' >
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
        <div className='logs'>
            <a>Login</a>
            <a className='sign-up'>Sign Up</a>
        </div>
        </div>

       {openModal &&  <Mobilenavbar/> }

     <button className='hamburger' onClick={() => {setOpenModal(!openModal)} } > <GiHamburgerMenu  size={40} color='black' />   </button> 
     
  
    </div>


    <div className='presentation'>
      <div className='illustration-text'>
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed 
          insights on how your links are performing
        </p>
        <button>Get Started</button>
      </div>
      <img src={illustration} />
    </div>
    </>
  )
}
