import styled from 'styled-components'
import BackgroundImg from 'gatsby-background-image'
import * as colors from '../../../global/variables.module.scss'

export const Landing = styled.section`
  margin: 7.25rem 0 3.5rem;

  @media (min-width: 48rem) {
    margin: 7.375rem 0 9rem;
  }
`

export const LandingHeaderWrap = styled.header`
  background-color: ${colors.white};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;

  @media (min-width: 48rem) {
    background-color: transparent;
    transform: translateY(40%);
  }
`

export const LandingHeaderBackground = styled.div`
  background-color: ${colors.white};
`

export const LandingHeader = styled.h2`
  color; ${colors.dark};
  font-family: 1.75rem;
  font-weight: 500;
  line-height: 2.625rem;
  margin: 0;
  padding: 2.25rem 0 0;
  white-space: pre-line;

  @media (min-width: 48rem) {
    font-size: 3.5rem;
    line-height: 4.375rem;
    padding: 5.75rem 0 0;
  }
`

export const LandingBackgroundWrap = styled.div`
  height: calc(100vh - 7.25rem);
  margin: 0 0 4.25rem;
  position: relative;

  @media (min-width: 48rem) {
    height: calc(100vh - 7.375rem - 7.375rem);
    margin: 0 0 11rem;
  }
`

export const LandingBackgroundImage = styled(BackgroundImg)`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`
