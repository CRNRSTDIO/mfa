import React from 'react'
import PropTypes from 'prop-types'
import * as styled from './styled'

const Button = ({ children }) => (
  <styled.Button>
    {children}
  </styled.Button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
