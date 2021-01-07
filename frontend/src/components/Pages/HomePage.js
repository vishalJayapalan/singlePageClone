import React from 'react'

import Navbar from '../Navbar/Navbar'
import MobileAppLanding from '../MobileAppLanding/MobileAppLanding'
import ExploreDemos from '../ExploreDemos/ExploreDemos'
import BusinessJourney from '../BusinessJourney/BusinessJourney'
import Footer from '../Footer/Footer'

export default function HomePage ({ location }) {
  return (
    <div className='homePage'>
      <Navbar pathName={location.pathname.slice(1)} />
      <img
        className='phoneBackground'
        alt='phoneBackground'
        src='/images/PhoneBackGround.png'
      ></img>
      <img className='phone1' alt='phone 1' src='/images/PhoneImg1.png'></img>
      <img className='phone2' alt='phone 2' src='/images/PhoneImg2.png'></img>
      <MobileAppLanding />
      <hr className='hrAfterMobile'></hr>
      <ExploreDemos />
      <hr className='hrAfterExplore'></hr>
      <BusinessJourney />
      <hr className='hrAfterBusinessJourney'></hr>
      <section className='clientSay'>
        <h4 className='clientH4'>What Clients say about our product</h4>
        <div className='clientBorder1'>
          <div className='clientNameContainer'>
            <img alt='client1' src='/images/Client1.png'></img>
            <h4 className='client1h4'>Allen Jones</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor incididunt labore dolore features that Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>
        <div className='clientBorder2'>
          <div className='clientNameContainer'>
            <img alt='client2' src='/images/Client2.png'></img>
            <h4 className='client2h4'>Allen Jones</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor incididunt labore dolore features that Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>
      </section>
      <section className='subscribeContainer'>
        <h5>Subscribe Our newsletter</h5>
        <section className='subscribeInputContainer'>
          <span className='subscribeSpan'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor incididunt labore dolore
          </span>
          <div className='subscribeSpanInputs'>
            <div className='subscribeInputInnerContainer'>
              <input
                style={{ color: 'white' }}
                placeholder='Email Address'
              ></input>
              <div className='inputUnderline'></div>
            </div>
            <button className='subscribeButton'>Get Access</button>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  )
}
