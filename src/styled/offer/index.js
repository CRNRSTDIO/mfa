import styled from 'styled-components'

import { Heading } from '../../components/offer/Heading/styled'

export const OfferSection00 = styled.section`
  align-items: center;
  display: flex;
  height: 60vh;

  @media (min-width: 48rem) {
    padding-top: 7.375rem;
  }

  ${Heading} {
    margin: 0;
  }
`
