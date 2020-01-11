import styled from 'styled-components'
import { Body } from '../../shared/Body/styled'
import * as colors from '../../../global/variables.module.scss'

export const Landscape = styled.section`
  @media (min-width: 48rem) {
    ${Body} {
      margin-bottom: 56px;
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
