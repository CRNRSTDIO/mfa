import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { Heading, Body, Button } from '../../shared/'

import * as styled from './styled'

const Process = ({
  heading,
  steps = [],
  text,
  fields: {
    slug
  }
}) => (
  <styled.Process>
    <div className='container'>
      <Heading>{heading}</Heading>
      <styled.ProcessSteps>
        <div className='grid-noBottom'>
          <div className='col-12 grid-noBottom' data-push-left='off-1_xs-0'>
            {steps && steps.map(({ step }, key) => (
              <div key={key} className='col-1_xs-12' data-push-left='off-1_xs-0'>
                <styled.ProcessStep>
                  {step}
                </styled.ProcessStep>
              </div>
            ))}
          </div>
        </div>
      </styled.ProcessSteps>
      <Body>{text}</Body>
      <div className='grid-noBottom'>
        <div className='col-10_xs-12' data-push-left='off-2_xs-0'>
          <Button as={Link} to={slug}>Więcej</Button>
        </div>
      </div>
    </div>
  </styled.Process>
)

Process.propTypes = {
  fields: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired
}

export default Process
