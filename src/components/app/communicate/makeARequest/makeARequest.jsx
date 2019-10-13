import React, {useState} from 'react'

import MainHeader from 'components/mainHeader/mainHeader'

import './makeARequest.css'

const steps = {
  observation: 'observation',
  feeling: 'feeling',
  need: 'need',
  request: 'request'
}

const getStepTitle = ({step}) => ({
  observation: '1. Make an observation',
  feeling: '2. Identify your feeling',
  need: '3. Identify your need',
  request: '4. Formulate a request'
})[step]

const MakeARequest = () => {
  const [currentStep, setStep] = useState(steps.observation)
  return (
    <>
      <MainHeader>
        {getStepTitle({step: currentStep})}
      </MainHeader>
      <div className='makeARequest'>
        {(currentStep === steps.observation) && (
          <>
            <p>When I [see|hear|remember|imagine|add your own] __,</p>
            <button
              type='button'
              onClick={() => setStep(steps.feeling)}
            >
              Next
            </button>
          </>
        )}

        {(currentStep === steps.feeling) && (
          <>
            <p>I feel [list of emotions|add your own],</p>
            <button
              type='button'
              onClick={() => setStep(steps.need)}
            >
              Next
            </button>
          </>
        )}

        {(currentStep === steps.need) && (
          <>
            <p>Because my need for [list of needs|add your own] is not met.</p>
            <button
              type='button'
              onClick={() => setStep(steps.request)}
            >
              Next
            </button>
          </>
        )}

        {(currentStep === steps.request) && (
          <>
            <p>Would you be willing to __ so __?</p>
            <button
              type='button'
              onClick={() => {
                console.log('Nice job')
              }}
            >
              Finish
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default MakeARequest
