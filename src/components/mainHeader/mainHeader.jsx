import React from 'react'
import {node} from 'prop-types'

import './mainHeader.css'

const MainHeader = ({children}) => (
  <header className='mainHeader'>
    <h1>{children}</h1>
  </header>
)

MainHeader.propTypes = {
  children: node.isRequired
}

export default MainHeader
