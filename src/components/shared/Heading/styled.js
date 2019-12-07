import styled from 'styled-components'
import * as colors from '../../../global/variables.scss'

export const Heading = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  position: relative;
  white-space: pre-line;

  @media (min-width: 48rem) {
    font-size: 1.875rem;
  }

  ::before {
    background-color: ${colors.red};
    content: '';
    display: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: .25rem;

    @media (min-width: 48rem) {
      display: block;
    }
  }
`
