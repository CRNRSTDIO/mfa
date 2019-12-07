import React from 'react'
import PropTypes from 'prop-types'
import * as styled from './styled'

const Button = ({ isActive, children, ...rest }) => (
  <styled.ButtonWrap>
    <styled.Button isActive={isActive} {...rest}>
      {children}
    </styled.Button>
  </styled.ButtonWrap>
)

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
