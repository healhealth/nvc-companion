/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {func} from 'prop-types'

import {actions} from '../communicate.enum'

import './actionsMenu.css'

const ActionsMenu = ({selectModule}) => (
  <>
    <header className='mainHeader'>
      <h1>What would you like to do?</h1>
    </header>
    <nav className='actionsMenu'>
      <button
        type='button'
        onClick={() => selectModule(actions.makeARequest)}
      >
        <div>
          <i className='fas fa-praying-hands' />
        </div>
        Make a request
      </button>
      <button
        type='button'
        onClick={() => selectModule(actions.offerEmpathy)}
      >
        <div>
          <i className='fas fa-hand-holding-heart' />
        </div>
        Offer empathy
      </button>
      <button
        type='button'
        onClick={() => selectModule(actions.expressGratitude)}
      >
        <div>
          <i className='fas fa-medal' />
        </div>
        Express gratitude
      </button>
    </nav>
  </>
)

ActionsMenu.propTypes = {
  selectModule: func
}

export default ActionsMenu
