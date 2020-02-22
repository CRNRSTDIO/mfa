import styled from 'styled-components'
import * as colors from '../../global/variables.module.scss'

export const NotFound = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
`

export const NotFoundCode = styled.div`
  color: ${colors.red};
  font-size: 100px;
  margin: 0 0 3rem;

  @media (min-width: 48rem) {
    font-size: 10.25rem;
    margin: 0;
  }
`

export const NotFoundHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0 0 2.625rem;

  @media (min-width: 48rem) {
    font-size: 3.5rem;
    line-height: 4.375rem;
  }
`

export const NotFoundBody = styled.p`
  font-size: .9375rem;
  margin: 0 0 2.625rem;
`
