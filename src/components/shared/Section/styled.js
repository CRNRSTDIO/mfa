import styled from 'styled-components'
import BackgroundImg from 'gatsby-background-image'

import * as colors from '../../../global/variables.module.scss'

export const Section = styled.section`
`

export const SectionHeading = styled.h3`
  color: ${colors.dark};
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0;
  position: relative;

  @media (min-width: 48rem) {
    font-size: 1.3125rem;
    line-height: 1.6875rem;

    ::before {
      background-color: ${colors.red};
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 4px;
    }
  }
`

export const SectionNumber = styled.span`
  display: block;
  font-size: 1.125rem;
  margin: 3rem 0;

  @media (min-width: 48rem) {
    font-size: 1.3125rem;
    line-height: 1.6875rem;
  }
`

export const SectionBody = styled.div`
  color: ${colors.dark};
  font-size: .9375rem;
  line-height: 2rem;
`

export const SectionImage = styled(BackgroundImg)`
  height: 19.875rem;
  margin: 3.125rem 0;
  width: 100%;

  @media (min-width: 48rem) {
    margin: 8.5rem 0;
  }
`

export const SectionSpacer = styled.div`
  margin: 3.125rem;
`
