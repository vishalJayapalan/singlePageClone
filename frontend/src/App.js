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

      <h3>Essential Mobile App Landing for Workspaces</h3>
    </div>
  )
}

export default App
