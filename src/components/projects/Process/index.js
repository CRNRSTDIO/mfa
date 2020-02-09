import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Heading, Body } from '../../shared/'

import * as styled from './styled'

const Process = ({
  heading,
  steps = [],
  currentTab,
  setCurrentTab
}) => {
  useEffect(() => {
    steps && setCurrentTab(steps[0].step)
  }, [
    steps,
    setCurrentTab
  ])

  return (
    <styled.Process>
      <div className='container'>
        <Heading>{heading}</Heading>
        <styled.ProcessSteps>
          <div className='grid-noBottom'>
            <div className='col-12 grid-noBottom' data-push-left='off-1_xs-0'>
              {steps && steps.map(({ step }, key) => (
                <div key={key} className='col-1_xs-12' data-push-left='off-1_xs-0'>
                  <styled.ProcessStep>
                    <styled.ProcessStepButton
                      isActive={currentTab === step}
                      onClick={() => setCurrentTab(step)}
                    >
                      {step}
                    </styled.ProcessStepButton>
                  </styled.ProcessStep>
                </div>
              ))}
            </div>
          </div>
        </styled.ProcessSteps>
        {steps && steps.map(({ step, text }, key) => (
          <styled.ProcessStepText isActive={currentTab === step} key={key}>
            <Body>{text}</Body>
          </styled.ProcessStepText>
        ))}
      </div>
    </styled.Process>
  )
}

Process.propTypes = {
  heading: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired
}

export default Process
