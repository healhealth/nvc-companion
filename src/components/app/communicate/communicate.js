/* eslint-disable sonarjs/no-duplicate-string */
import React, {useState} from 'react'

import MakeARequest from './makeARequest/makeARequest'
import ActionsMenu from './actionsMenu/actionsMenu'
import {actions} from './communicate.enum'

const Communicate = () => {
  const [selectedModule, selectModule] = useState(null)
  return (
    <>
      {(selectedModule === actions.makeARequest) && (
        <MakeARequest
          onBack={() => selectModule(null)}
        />
      )}
      {(selectedModule === actions.offerEmpathy) && (
        <>
          <h1>Offer empathy</h1>
          <button
            type='button'
            onClick={() => selectModule(null)}
          >
            Go back
          </button>
        </>
      )}
      {(selectedModule === actions.expressGratitude) && (
        <>
          <h1>Express gratitude</h1>
          <button
            type='button'
            onClick={() => selectModule(null)}
          >
            Go back
          </button>
        </>
      )}
      {(selectedModule === null) && (
        <ActionsMenu
          selectModule={selectModule}
        />
      )}
    </>
  )
}

export default Communicate

export {actions}
