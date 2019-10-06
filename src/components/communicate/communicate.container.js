/* eslint-disable sonarjs/no-duplicate-string */
import React, {useState} from 'react'
import MakeARequest from './makeARequest/makeARequest.container'

const modules = {
  makeARequest: 'makeARequest',
  offerEmpathy: 'offerEmpathy',
  expressGratitude: 'expressGratitude'
}

const Communicate = () => {
  const [selectedModule, selectModule] = useState(null)
  return (
    <>
      {(selectedModule === modules.makeARequest) && (
        <MakeARequest
          onBack={() => selectModule(null)}
        />
      )}
      {(selectedModule === modules.offerEmpathy) && (
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
      {(selectedModule === modules.expressGratitude) && (
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
        <>
          <h1>What would you like to do?</h1>
          <button
            type='button'
            onClick={() => selectModule(modules.makeARequest)}
          >
            Make a request
          </button>
          <button
            type='button'
            onClick={() => selectModule(modules.offerEmpathy)}
          >
            Offer empathy
          </button>
          <button
            type='button'
            onClick={() => selectModule(modules.expressGratitude)}
          >
            Express gratitude
          </button>
        </>
      )}
    </>
  )
}

export default Communicate
