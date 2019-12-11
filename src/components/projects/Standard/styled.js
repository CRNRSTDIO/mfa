import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

import { Button } from '../../shared/Button/styled'

export const Standard = styled.section`
  margin: 8.5rem 0 0;

  @media (min-width: 48rem) {
    margin: 5.625rem 0 0;
  }

  ${Button} {
    margin: 2.5rem 0 0;
  }
`

export const StandardTextWrap = styled.div`
  margin: 0;

  @media (min-width: 48rem) {
    margin-top: auto;
  }
`

export const StandardInner = styled.div`
  display: flex;
  height: 100%;
  margin: 2.5rem 0 0;
  position: relative;

  @media (min-width: 48rem) {
    margin: 0;
  }

  ::before {
    background-color: ${colors.grey};
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1.75rem;
  }
`

export const StandardHeading = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.875rem;
  margin: 2.5rem 0;
  position: relative;
  white-space: pre-line;

  @media (min-width: 48rem) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`

export const StandardText = styled.p`
  color: ${colors.dark};
  font-size: .9375rem;
  line-height: 1;
  margin: 0;
  white-space: pre-line;
`
