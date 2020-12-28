import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import TrailContent from '../TrailContent/TrailContent'
// import Footer from '../Footer/Footer'

export default function FreeTrailPage () {
  const [trailContents, setTrailContents] = useState([
    {
      id: 1,
      heading: 'Prepaire to bring your business online',
      subHeadings: [
        'Deside Who You Want to Reach',
        'map the Customer Journey',
        'Set Marketing Goals'
      ]
    },
    {
      id: 2,
      heading: 'Establish your presence',
      subHeadings: [
        'Stay Connected to Customer Online',
        'Bring Your Business Online With Instagram',
        'Help Your Customers Connect to Your Businness on WhatsApp'
      ]
    },
    {
      id: 3,
      heading: 'Attract an audience',
      subHeadings: [
        'Attract an Audience on Social Media',
        'Plan What to Post on Instagram',
        'How to Make Your Instagram Content Statnd out'
      ]
    },

    {
      id: 4,
      heading: 'Build relationships',
      subHeadings: [
        'Engage With People and Build an Audience',
        'Communicate With Customers on WhatsApp',
        'Go Live on Instagram'
      ]
    },
    {
      id: 5,
      heading: 'Improve your creative stratergy',
      subHeadings: [
        'Create Ads from Your Facebook Page',
        'How to Turn Instagram Posts into Ads',
        'Tips for Creating Engaging Mobile Ads',
        'Creative Tips for Instagram Stories'
      ]
    }
  ])

  return (
    <div className='FreeTrailPage'>
      <Navbar />
      <section className='trailContentsContainer'>
        {trailContents.map(trailContent => (
          <TrailContent key={trailContent.id} trailContent={trailContent} />
        ))}
      </section>
      {/* <Footer /> */}
    </div>
  )
}
