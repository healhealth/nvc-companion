/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {Link} from '@reach/router'

import './actionsMenu.css'

const ActionsMenu = () => (
  <>
    <header className='mainHeader'>
      <h1>What would you like to do?</h1>
    </header>
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
