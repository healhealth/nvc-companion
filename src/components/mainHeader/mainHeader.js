import React from 'react'
import {string} from 'prop-types'

import './mainHeader.css'

const MainHeader = ({heading}) => (
  <header className='mainHeader'>
    <h1>{heading}</h1>
  </header>
)

MainHeader.propTypes = {
  heading: string.isRequired
}

export default MainHeader
