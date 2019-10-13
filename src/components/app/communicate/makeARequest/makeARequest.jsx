import React, {useState} from 'react'
import classNames from 'classnames'

import MainHeader from 'components/mainHeader/mainHeader'

import './makeARequest.css'

const steps = {
  observation: 'observation',
  feeling: 'feeling',
  need: 'need',
  request: 'request'
}


const {observation, feeling, need, request} = steps

const getStepTitle = ({step}) => ({
  observation: '1. Make an observation',
  feeling: '2. Identify your feeling',
  need: '3. Identify your need',
  request: '4. Formulate a request'
})[step]

const MakeARequest = () => {
  const [currentStep, setStep] = useState(observation)
  return (
    <>
      <MainHeader>
        {getStepTitle({step: currentStep})}
      </MainHeader>
      <div className='makeARequest'>
        <div
          className={
            classNames({
              current: currentStep === observation,
              done: currentStep !== observation
            })
          }
        >
          <p>When I [see|hear|remember|imagine|add your own] __,</p>
          <button
            type='button'
            onClick={() => setStep(feeling)}
            disabled={currentStep !== observation}
          >
            Next
          </button>
        </div>
        <div
          className={
            classNames({
              current: currentStep === feeling,
              done: ![observation, feeling].includes(currentStep),
              upcoming: currentStep === observation
            })
          }
        >
          <p>I feel [list of emotions|add your own],</p>
          <button
            type='button'
            onClick={() => setStep(need)}
            disabled={currentStep !== feeling}
          >
            Next
          </button>
        </div>
        <div
          className={
            classNames({
              current: currentStep === need,
              done: ![observation, feeling, need].includes(currentStep),
              upcoming: [observation, feeling].includes(currentStep)
            })
          }
        >
          <p>Because my need for [list of needs|add your own] is not met.</p>
          <button
            type='button'
            onClick={() => setStep(request)}
            disabled={currentStep !== need}
          >
            Next
          </button>
        </div>
        <div
          className={
            classNames({
              current: currentStep === request,
              upcoming: currentStep !== request
            })
          }
        >
          <p>Would you be willing to __ so __?</p>
          <button
            type='button'
            onClick={() => {
              console.log('Nice job')
            }}
            disabled={currentStep !== request}
          >
            Finish
          </button>
        </div>
      </div>
    </>
  )
}

export default MakeARequest
