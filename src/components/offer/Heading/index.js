import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Heading = ({ children }) => (
  <styled.Heading>
    <div className='grid-noBottom'>
      <div className='col-6_xs-12'>
        {children}
      </div>
    </div>
  </styled.Heading>
)

Heading.propTypes = {
  children: PropTypes.string.isRequired
}

export default Heading
