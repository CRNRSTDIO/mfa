import styled from 'styled-components'
import * as colors from '../../../global/variables.scss'

export const Heading = styled.h1`
  color: ${colors.dark};
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.625rem;
  white-space: pre-line;

  @media (min-width: 48rem) {
    font-size: 2.5rem;
    line-height: 3.625rem;
  }
`
