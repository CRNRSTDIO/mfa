import React from 'react'
import PropTypes from 'prop-types'
import * as styled from './styled'

const Button = ({ children, ...rest }) => (
  <styled.Button {...rest}>
    {children}
  </styled.Button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
