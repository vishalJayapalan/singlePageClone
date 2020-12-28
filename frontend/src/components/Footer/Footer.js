import React from 'react'
import './Footer.css'

export default function Footer ({ page }) {
  return (
    <footer
      className='footer'
      style={{ position: page ? 'static' : 'absolute' }}
    >
      <img alt='Logo' className='footerLogo' src='/images/Logo.png'></img>
      <div>
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
      </div>
      <p className='author'>Developed by vishalJayapalan</p>
    </footer>
  )
}
