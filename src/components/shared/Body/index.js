import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Body = ({ children }) => (
  <styled.Body>
    <div className='grid-noBottom'>
      <div className='col-9_xs-12' data-push-left='off-2_xs-0'>
        {children}
      </div>
    </div>
  </styled.Body>
)

Body.propTypes = {
  children: PropTypes.string.isRequired,
  note: PropTypes.string
}

export default Body
