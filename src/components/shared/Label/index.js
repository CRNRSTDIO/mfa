import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Label = ({ children }) => (
  <styled.Label>
    <div className='grid-noBottom'>
      <div className='col-7_xs-12' data-push-left='off-2_xs-0'>
        <styled.LabelText>
          {children}
        </styled.LabelText>
      </div>
    </div>
  </styled.Label>
)

Label.propTypes = {
  children: PropTypes.string.isRequired
}

export default Label
