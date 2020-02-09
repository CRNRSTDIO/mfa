import styled from 'styled-components'
import { Heading } from '../../shared/Heading/styled'
import { Body } from '../../shared/Body/styled'
import { Button } from '../../shared/Button/styled'
import * as colors from '../../../global/variables.module.scss'

export const Process = styled.section`
  background-color: ${colors.grey1};
  padding: 2.625rem 0;

  @media (min-width: 48rem) {
    padding: 8.25rem 0;
  }

  ${Heading} {

  }

  ${Body} {
    margin: 2rem 0 0;
  }

  ${Button} {
    margin: 3rem 0 0;
  }
`

export const ProcessSteps = styled.ul`
  color: ${colors.dark};
  list-style: none;
  margin: 2.25rem 0 0;
`

export const ProcessStep = styled.li`
  font-size: .625rem;
  font-weight: 500;
  letter-spacing: .1875rem;
  margin: 0;
  text-transform: uppercase;
  white-space: nowrap;
`

export const ProcessStepButton = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  margin: 0;
  outline: 0;
  padding: 1.125rem 0;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  width: 100%;

  ::after {
    background-color: ${colors.red};
    bottom: 0;
    content: '';
    height: 0.125rem;
    left: 0;
    opacity: ${({ isActive }) => isActive ? '1' : '0'};
    position: absolute;
    transition: opacity .15s linear;
    width: 100%;
  }
`

export const ProcessStepText = styled.div`
  display: ${({ isActive }) => isActive ? 'block' : 'none'};
`
