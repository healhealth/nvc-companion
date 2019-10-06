/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'
import {func} from 'prop-types'
import {actions} from '../communicate.enum'

const ActionsMenu = ({selectModule}) => (
  <>
    <h1>What would you like to do?</h1>
    <button
      type='button'
      onClick={() => selectModule(actions.makeARequest)}
    >
      Make a request
    </button>
    <button
      type='button'
      onClick={() => selectModule(actions.offerEmpathy)}
    >
      Offer empathy
    </button>
    <button
      type='button'
      onClick={() => selectModule(actions.expressGratitude)}
    >
      Express gratitude
    </button>
  </>
)

ActionsMenu.propTypes = {
  selectModule: func
}

export default ActionsMenu
