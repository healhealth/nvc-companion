import React from 'react'

import MainHeader from 'components/mainHeader/mainHeader'
import MenuItem from './menuItem/menuItem'

import './actionsMenu.css'

const ActionsMenu = () => (
  <>
    <MainHeader
      heading='What would you like to do?'
    />
    <nav className='actionsMenu'>
      <MenuItem
        to='make-a-request'
        icon='fas fa-praying-hands'
      >
        Make a request
      </MenuItem>
      <MenuItem
        to='offer-empathy'
        icon='fas fa-hand-holding-heart'
      >
        Offer empathy
      </MenuItem>
      <MenuItem
        to='express-gratitude'
        icon='fas fa-medal'
      >
        Express gratitude
      </MenuItem>
    </nav>
  </>
)

export default ActionsMenu
