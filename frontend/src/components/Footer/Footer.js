import React from 'react'
import './Footer.css'

export default function Footer () {
  return (
    <footer className='footer'>
      <img alt='Logo' className='footerLogo' src='/images/Logo.png'></img>
      <img
        alt='twitterIcon'
        className='twitterLogo'
        src='/images/Twitter.png'
      ></img>
      <img
        alt='facebookIcon'
        className='facebookLogo'
        src='/images/Facebook.png'
      ></img>
      <p className='author'>Developed by vishalJayapalan</p>
    </footer>
  )
}
