import React from 'react'
import Navbar from './components/Navbar/Navbar'

import './App.css'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <img className='phoneBackground' src='/images/PhoneBackGround.png'></img>
      <img className='phone1' src='/images/PhoneImg1.png'></img>
      <img className='phone2' src='/images/PhoneImg2.png'></img>
      <section className='mobileAppLanding'>
        <h3>Essential Mobile App Landing for Workspaces</h3>
        <p>
          A mobile app landing page is important and essential for right amount
          of information about your product. Start increasing your user base
          upon the launch of your product
        </p>
        <button>
          Explore Demos
          {/* <img className='whiteArrow' src='/images/WhiteRightArrow.png'></img> */}
        </button>
      </section>
      <hr className='hrAfterMobile'></hr>
      <section className='explore'>
        <h4>Explore our demos</h4>
        <p>
          Explore our landing Page demos on different kind of topics. More Demos
          are coming soon.
        </p>
        <img className='websiteLanding' src='/images/WebsiteLanding.png'></img>
        <img className='appLanding' src='/images/AppModernLanding.png'></img>
      </section>
      <hr className='hrAfterExplore'></hr>
      <section className='businessJourney'>
        <h4>Start your business journey with Soprano</h4>
        <p>
          Try Shopify for free, and explore all the tools and services you need
          to start, run, and grow your business.
        </p>
        <section className='businessOnline'>
          <img src='/images/Globe.png'></img>
          <h5>Move Your Business Online</h5>
          <p>
            Create a business, whether you’ve got a fresh idea or are looking
            for a new way to make money.
          </p>
        </section>

        <section className='switchSoprano'>
          <img src='/images/PeopleLogo.png'></img>
          <h5>Switch to Soprano</h5>
          <p>
            Bring your business to Soprano, no matter which ecommerce platform
            you’re currently using.
          </p>
        </section>

        <section className='enjoyBenefits'>
          <img src='/images/SmileyLogo.png'></img>
          <h5>Enjoy ur benefits</h5>
          <p>
            Get set up with the help of a trusted freelancer or agency from the
            Shopify Experts Marketplace.
          </p>
        </section>
      </section>
      <hr className='hrAfterBusinessJourney'></hr>
      <section className='clientSay'>
        <h4>What Clients say about our product</h4>
        <div className='clientBorder1'>
          <img src='/images/Client1.png'></img>
          <h4>Allen Jones</h4>
        </div>
        <div className='clientBorder2'>
          <img src='/images/Client2.png'></img>
          <h4>Allen Jones</h4>
        </div>
      </section>
    </div>
  )
}

export default App
