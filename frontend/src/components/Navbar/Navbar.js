import React from 'react'
import './Navbar.css'

export default function Navbar () {
  return (
    <header className='header'>
      <section className='logoContainer'>
        <img src='/images/Logo.png'></img>
      </section>
      {/* <section className='navbarListContainer'> */}
      <ul className='navbarListContainer'>
        <li className='selected list'>Home</li>
        <li className='list'>Products</li>
        <li className='list'>About Us</li>
        <li className='list'>Demos</li>
        <li className='list'>Contact Us</li>
      </ul>
      {/* </section> */}
    </header>
  )
}
