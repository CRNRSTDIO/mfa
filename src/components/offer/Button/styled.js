import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

export const ButtonWrap = styled.div`
  :last-child {
    margin-bottom: 2rem;
  }

  & + & {
    margin-top: 1.5rem;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 0;
  color: ${colors.dark1};
  cursor: pointer;
  font-size: .625rem;
  font-weight: 500;
  letter-spacing: .1875rem;
  margin: 0;
  outline: 0;
  padding: .625rem 0;
  position: relative;

  ::after {
    background-color: ${colors.dark1};
    content: '';
    height: 1px;
    left: 0;
    opacity: ${({ isActive }) => isActive ? '1' : '0'};
    position: absolute;
    top: 100%;
    width: 100%;
  }
`
