import styled from 'styled-components'
import * as colors from '../../../global/variables.scss'

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 0;
  color: ${colors.red};
  font-family: inherit;
  font-size: .5625rem;
  letter-spacing: 10px;
  margin: 0;
  outline: 0;
  padding: 12px 28px;
  position: relative;
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
