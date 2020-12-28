import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Image } from 'react-bootstrap'

export default function ExploreDemos () {
  return (
    <section className='explore'>
      <h4>Explore our demos</h4>
      <p>
        Explore our landing Page demos on different kind of topics. More Demos
        are coming soon.
      </p>
      <Carousel pause='hover' className='exploreDemosImageContainer'>
        <Carousel.Item>
          <img
            className='websiteLanding'
            alt='Website Landing'
            src='/images/WebsiteLanding.png'
          ></img>
          <img
            className='appLanding'
            alt='App Modern Landing'
            src='/images/AppModernLanding.png'
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='appLanding'
            alt='App Modern Landing'
            src='/images/AppModernLanding.png'
          ></img>
          <img
            className='websiteLanding'
            alt='Website Landing'
            src='/images/WebsiteLanding.png'
          ></img>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className='websiteLanding'
            alt='Website Landing'
            src='/images/WebsiteLanding.png'
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='appLanding'
            alt='App Modern Landing'
            src='/images/AppModernLanding.png'
          ></img>
        </Carousel.Item> */}
      </Carousel>
    </section>
  )
}
