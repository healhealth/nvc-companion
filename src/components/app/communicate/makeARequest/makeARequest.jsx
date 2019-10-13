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
        <div className='steps'>
          <div
            className={
              classNames('step', {
                current: currentStep === observation,
                done: currentStep !== observation
              })
            }
          >
            <p>When I hear you addressing me like that,</p>
            {(currentStep === observation) && (
              <button
                type='button'
                onClick={() => setStep(feeling)}
              >
                Next
              </button>
            )}
            {(currentStep !== observation) && (
              <button
                className='selectStep'
                type='button'
                onClick={() => setStep(observation)}
              >
                Go back to making an observation
              </button>
            )}
          </div>
          <div
            className={
              classNames('step', {
                current: currentStep === feeling,
                done: ![observation, feeling].includes(currentStep),
                upcoming: currentStep === observation
              })
            }
          >
            <p>I feel agitated,</p>
            {(currentStep === feeling) && (
              <button
                type='button'
                onClick={() => setStep(need)}
              >
                Next
              </button>
            )}
            {![observation, feeling].includes(currentStep) && (
              <button
                className='selectStep'
                type='button'
                onClick={() => setStep(feeling)}
              >
                Go back to Identifying the feeling
              </button>
            )}
          </div>
          <div
            className={
              classNames('step', {
                current: currentStep === need,
                done: ![observation, feeling, need].includes(currentStep),
                upcoming: [observation, feeling].includes(currentStep)
              })
            }
          >
            <p> because my need for cooperation is not being met.</p>
            {(currentStep === need) && (
              <button
                type='button'
                onClick={() => setStep(request)}
              >
                Next
              </button>
            )}
            {![observation, feeling, need].includes(currentStep) && (
              <button
                className='selectStep'
                type='button'
                onClick={() => setStep(need)}
              >
                Go back to identifying the need
              </button>
            )}
          </div>
          <div
            className={
              classNames('step', {
                current: currentStep === request,
                upcoming: currentStep !== request
              })
            }
          >
            <p>Would you be willing to tell me what you are feeling and needing right now instead of what you think I am, so we can come to a peaceful resolution of our differences?</p>
            {(currentStep === request) && (
              <button
                type='button'
                onClick={() => {
                  console.log('Nice job')
                }}
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MakeARequest
