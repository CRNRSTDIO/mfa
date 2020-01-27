import React from 'react'
import PropTypes from 'prop-types'

import { Heading, Body } from '../../shared'
import * as styled from './styled'

const Description = ({
  heading,
  text
}) => (
  <styled.Description>
    <div className='container'>
      <Heading>
        {heading}
      </Heading>
      <Body>
        {text}
      </Body>
    </div>
  </styled.Description>
)

Description.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Description
