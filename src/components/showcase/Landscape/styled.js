import styled from 'styled-components'
import { Body } from '../../shared/Body/styled'

export const Landscape = styled.section`
  margin: 6rem 0 4.5rem;

  @media (min-width: 48rem) {
    margin: 8.25rem 0 7rem;

    ${Body} {
      margin-bottom: 3.5rem;
    }
  }
`

export const Legend = styled.div`
  margin: 1.875rem 0;

  @media (min-width: 48rem) {
    margin: 3rem 0;
  }
`

export const LegendLabel = styled.div`
  font-size: .625rem;
  letter-spacing: .1875rem;
  text-transform: uppercase;

  @media (min-width: 48rem) {
    margin-bottom: 1.5rem;
  }
`

export const LegendItem = styled.div`
  display: inline-block;
  font-size: .75rem;
  line-height: .875rem;
  width: 50%;

  @media (min-width: 48rem) {
    width: 100%;
  }

  & + & {
    margin-top: 1rem;

    @media (min-width: 48rem) {
      margin-top: 1.5rem;
    }
  }
`
