import styled from 'styled-components'
import BackgroundImg from 'gatsby-background-image'

import * as colors from '../../../global/variables.scss'

export const Landing = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  position: relative;
  z-index: 1;
`

export const LandingHeader = styled.h2`
  color: ${colors.white};
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.625rem;
  margin: 0;
  position: relative;

  @media (min-width: 48rem) {
    font-size: 2.5rem;
    line-height: 3.625rem;
  }
`

export const LandingSubheading = styled.span`
  color: ${colors.white};
  display: block;
  font-size: .625rem;
  letter-spacing: .125rem;
  margin: 2rem 0;
  text-transform: uppercase;

  @media (min-width: 48rem) {
    display: inline-block;
    margin: 5.625rem 4.75rem 0 0;
  }
`

export const LandingBackgroundImage = styled(BackgroundImg)`
  height: calc(100vh - 2rem - 7.125rem);
  left: 0;
  position: absolute;
  top: 7.125rem;
  width: 100%;
  z-index: -1;

  @media (min-width: 48rem) {
    height: calc(100vh - 5.125rem - 11.875rem);
    top: 11.875rem;
  }
`
