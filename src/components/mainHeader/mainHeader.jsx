import React from 'react'
import {node} from 'prop-types'

import './mainHeader.css'

const MainHeader = ({children}) => (
  <header className='mainHeader'>
    <div className='mainHeaderHeadingOuterWrapper'>
      <h1>{children}</h1>
    </div>
  </header>
)

MainHeader.propTypes = {
  children: node.isRequired
}

export default MainHeader
