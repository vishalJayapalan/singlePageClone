import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar ({ pathName }) {
  console.log(pathName)
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
          className={`${pathName === '' ? 'selected' : ''} list`}
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='/products'
          className={`${pathName === 'products' ? 'selected' : ''} list`}
        >
          Products
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='/aboutus'
          className={`${pathName === 'aboutus' ? 'selected' : ''} list`}
        >
          About Us
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='demos'
          className={`${pathName === 'demos' ? 'selected' : ''} list`}
        >
          Demos
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='contactus'
          className={`${pathName === 'contactus' ? 'selected' : ''} list`}
        >
          Contact Us
        </Link>
      </ul>
      {/* </section> */}
    </header>
  )
}
