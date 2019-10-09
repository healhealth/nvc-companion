import React from 'react'
import {Router} from '@reach/router'

import Communicate from 'components/app/communicate/communicate'

import './app.css'

const App = () => (
  <div className='app'>
    <Router>
      <Communicate path='communicate/*' />
    </Router>
  </div>
)

export default App
