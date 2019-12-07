import styled from 'styled-components'
import { Heading } from '../../shared/Heading/styled'
import { Body } from '../../shared/Body/styled'
import { Button } from '../../shared/Button/styled'
import * as colors from '../../../global/variables.scss'

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
  counter-reset: counter;
  list-style: none;
  margin: 0;
`

export const ProcessStep = styled.li`
  counter-increment: counter;
  font-size: .625rem;
  font-weight: 500;
  letter-spacing: .1875rem;
  margin: .75rem 0;
  text-transform: uppercase;
  white-space: nowrap;

  ::before {
    content: counter(counter, upper-roman) '. ';
  }
`
