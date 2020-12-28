import React from 'react'
import HomePage from './components/Pages/HomePage'
import FreeTrailPage from './components/Pages/FreeTrailPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route Path='/trailpage' component={FreeTrailPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
