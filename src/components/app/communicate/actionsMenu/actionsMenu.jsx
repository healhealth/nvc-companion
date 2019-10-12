/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {Link} from '@reach/router'

import MainHeader from 'components/mainHeader/mainHeader'

import './actionsMenu.css'

const ActionsMenu = () => (
  <>
    <MainHeader
      heading='What would you like to do?'
    />
    <nav className='actionsMenu'>
      <Link
        to='make-a-request'
        className='actionsMenuItem'
      >
        <div>
          <i className='fas fa-praying-hands' />
        </div>
        Make a request
      </Link>
      <Link
        to='offer-empathy'
        className='actionsMenuItem'
      >
        <div>
          <i className='fas fa-hand-holding-heart' />
        </div>
        Offer empathy
      </Link>
      <Link
        to='express-gratitude'
        className='actionsMenuItem'
      >
        <div>
          <i className='fas fa-medal' />
        </div>
        Express gratitude
      </Link>
    </nav>
  </>
)

export default ActionsMenu
