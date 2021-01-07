import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
  return (
    <header className='header'>
      <section className='logoContainer'>
        <img alt='logo' src='/images/Logo.png'></img>
      </section>
      {/* <section className='navbarListContainer'> */}
      <ul className='navbarListContainer'>
        <Link
          style={{ textDecoration: 'none' }}
          to='/'
          className='selected list'
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='/products'
          className='list'
        >
          Products
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/aboutus' className='list'>
          About Us
        </Link>
        <Link style={{ textDecoration: 'none' }} to='demos' className='list'>
          Demos
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='contactus'
          className='list'
        >
          Contact Us
        </Link>
      </ul>
      {/* </section> */}
    </header>
  )
}
