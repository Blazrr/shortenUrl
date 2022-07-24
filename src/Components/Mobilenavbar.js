import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import './styles/mobilenavbar.css'

export default function Mobilenavbar() {
  return (
    <>
    
    <div className='mobile-navbar ' >
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <hr/>
        <div className='logs'>
            <a>Login</a>
            <a className='sign-up'>Sign Up</a>
        </div>
        </div>
    
    </>
  )
}


