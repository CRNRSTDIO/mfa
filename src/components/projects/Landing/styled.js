import styled from 'styled-components'
import BackgroundImg from 'gatsby-background-image'
import * as colors from '../../../global/variables.module.scss'

export const Landing = styled.section`
  margin: 7.25rem 0 3.5rem;

  @media (min-width: 48rem) {
    margin: 11.625rem 0 9rem;
  }
`

export const LandingHeaderWrap = styled.header`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
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
  height: 12.5rem;
  margin: 0 0 4.25rem;
  position: relative;

  @media (min-width: 48rem) {
    height: 36.125rem;
    margin: 0 0 8.75rem;
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
