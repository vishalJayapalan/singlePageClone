import React from 'react'
import { Link } from 'react-router-dom'

export default function BusinessJourney () {
  return (
    <section className='businessJourney'>
      <h4>Start your business journey with Soprano</h4>
      <p>
        Try Shopify for free, and explore all the tools and services you need to
        start, run, and grow your business.
      </p>
      <section className='businessOnline'>
        <img alt='globe in pink background' src='/images/Globe.png'></img>
        <h5>Move Your Business Online</h5>
        <p>
          Create a business, whether you’ve got a fresh idea or are looking for
          a new way to make money.
        </p>
      </section>

      <section className='switchSoprano'>
        <img alt='2 people logo' src='/images/PeopleLogo.png'></img>
        <h5>Switch to Soprano</h5>
        <p>
          Bring your business to Soprano, no matter which ecommerce platform
          you’re currently using.
        </p>
      </section>

      <section className='enjoyBenefits'>
        <img alt='smiley Logo' src='/images/smileyLogo.png'></img>
        <h5>Enjoy ur benefits</h5>
        <p>
          Get set up with the help of a trusted freelancer or agency from the
          Shopify Experts Marketplace.
        </p>
      </section>
      <button>
        <Link
          style={{ textDecoration: 'none' }}
          to='/trailpage'
          className='startFreeTrailBtn'
        >
          Start Free Trail
        </Link>
      </button>
    </section>
  )
}
