import React from 'react'
import {Router} from '@reach/router'

import Communicate from 'components/app/communicate/communicate'

import './app.css'

const App = () => (
  <div className='app'>
    <Router className='fullHeightRouter'>
      <Communicate default />
      {/* <Communicate path='communicate/*' /> */}
    </Router>
  </div>
)

export default App
