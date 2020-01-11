import styled from 'styled-components'
import { Body } from '../../shared/Body/styled'
import * as colors from '../../../global/variables.module.scss'

export const Blueprints = styled.section`
  @media (min-width: 48rem) {
    ${Body} {
      margin-bottom: 56px;
    }
  }
`

export const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: .625rem;
  letter-spacing: .1875rem;
  line-height: .75rem;
  margin: 2.25rem 0 4.5rem;
  text-transform: uppercase;
`

export const LegendRow = styled.div`
  border-bottom: 1px solid ${colors.grey1};
  display: flex;
  flex-basis: 100%;
  flex-wrap: nowrap;
  padding: .625rem 0 .375rem;

  :nth-child(1) {
    margin-bottom: 2.25rem;
  }
`

export const LegendColumn = styled.div`
  flex-basis: 20%;

  :nth-child(1) {
    flex-basis: 60%;
    flex-shrink: 0;
  }
`
