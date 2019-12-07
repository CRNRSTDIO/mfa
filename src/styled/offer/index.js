import styled from 'styled-components'

import { Heading } from '../../components/offer/Heading/styled'

export const OfferSection00 = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;

  @media (min-width: 48rem) {
    align-items: flex-end;
  }

  ${Heading} {
    margin: 0;

    @media (min-width: 48rem) {
      margin-bottom: 9.5rem;
    }
  }
`
