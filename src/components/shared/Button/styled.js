import styled from 'styled-components'
import * as colors from '../../../global/variables.scss'

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 0;
  color: ${colors.red};
  display: inline-block;
  font-family: inherit;
  font-size: .5625rem;
  letter-spacing: .625rem;
  margin: 0 0 1rem;
  outline: 0;
  padding: .75rem 1.75rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  ::after {
    background-color: currentcolor;
    bottom: 0;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`
