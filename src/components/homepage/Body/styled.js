import styled from 'styled-components'
import * as colors from '../../../global/variables.scss'

export const Body = styled.div`
  color: ${colors.dark};
  font-size: .9375rem;
  margin: 0;
`

export const BodyNote = styled.div`
  color: ${colors.grey};
  margin: 2.25rem 0 0;

  @media (min-width: 48rem) {
    margin: 0;
  }
`
