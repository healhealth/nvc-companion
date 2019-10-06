/* eslint-disable sonarjs/no-duplicate-string */
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

        <h2>Make an observation</h2>
        <p>When I [see|hear|remember|imagine|add your own] __,</p>
        <ul>
          <li>Is it factual?</li>
          <li>Is it specific?</li>
          <li>Is it free of judgement?</li>
        </ul>

        <h2>Identify the feeling</h2>
        <p>I feel [list of emotions|add your own],</p>
        <ul>
          <li>Is it a feeling rather than a thought?</li>
          <li>Is this really the feeling which was stimulated?</li>
        </ul>

        <h2>Identify the need</h2>
        <p>Because my need for [list of needs|add your own] is not met.</p>
        <ul>
          <li>Is it a really a need?</li>
          <li>Is this really the need behind the feeling?</li>
        </ul>

        <h2>Make a request</h2>
        <p>Would you be willing to __ so __?</p>
        <ul>
          <li>Is this a request rather than a demand?</li>
          <li>Is it specific?</li>
          <li>Would the thing that I am requesting enrich my life?</li>
        </ul>
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
