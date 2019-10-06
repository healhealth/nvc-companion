import React, {useState} from 'react'

const modules = {
  makeARequest: 'makeARequest',
  offerEmpathy: 'offerEmpathy',
  expressGratitude: 'expressGratitude'
}

const Communicate = () => {
  const [selectedModule, selectModule] = useState(null)
  if (selectedModule === modules.makeARequest) {
    return (
      <>
        <h1>Make a request</h1>
        <button
          type='button'
          onClick={() => selectModule(null)}
        >
          Go back
        </button>
      </>
    )
  }
  if (selectedModule === modules.offerEmpathy) {
    return (
      <>
        <h1>Offer empathy</h1>
        <button
          type='button'
          onClick={() => selectModule(null)}
        >
          Go back
        </button>
      </>
    )
  }
  if (selectedModule === modules.expressGratitude) {
    return (
      <>
        <h1>Express gratitude</h1>
        <button
          type='button'
          onClick={() => selectModule(null)}
        >
          Go back
        </button>
      </>
    )
  }
  return (
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
  )
}

export default Communicate
