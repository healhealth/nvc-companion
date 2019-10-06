import React from 'react'
import {func} from 'prop-types'

const MakeARequest = ({onBack}) => (
  <>
    <h1>Make a request</h1>
    <button
      type='button'
      onClick={onBack}
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

MakeARequest.propTypes = {
  onBack: func
}

export default MakeARequest