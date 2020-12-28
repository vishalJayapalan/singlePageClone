import React from 'react'
import './TrailContent.css'

export default function TrailContent ({ trailContent }) {
  return (
    <div className='trailContentContainer'>
      <div className='trailContentHeadingContainer'>
        <hr className='hrB4Heading' />
        <section className='trailContentHeading'>
          {trailContent.heading}
        </section>
      </div>
      <div className='trailContentSubHeadingsContainer'>
        {trailContent.subHeadings.map(subHeading => (
          <div className='trailContentSubHeading'>
            <section>{subHeading} </section>
            <i className='far fa-arrow-alt-circle-right'></i>
          </div>
        ))}
      </div>
    </div>
  )
}
