import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

export const Landing = styled.section`
  align-items: flex-end;
  background-color: ${colors.grey1};
  background-image: radial-gradient(circle, ${colors.white} 50%, transparent 100%);
  display: flex;
  height: 100vh;
`

export const LandingHeading = styled.h2`
  color: ${colors.grey};
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 2.125rem;

  @media (min-width: 48rem) {
    font-size: 3.25rem;
    line-height: 3.25rem;
    margin: 0 0 2.375rem;
  }
`

export const LandingHuge = styled.a`
  color: ${colors.red};
  display: block;
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
  }

  @media (min-width: 48rem) {
    font-size: 5.125rem;
    line-height: 5.125rem;

    :last-child {
      margin-bottom: 20vh;
    }
  }
`

export const LandingData = styled.p`
  margin: 4.25rem 0 2.5rem;
  text-align: right;

  @media (min-width: 48rem) {
    margin: 0;
  }
`

export const LandingDataLine = styled.span`
  color: ${colors.grey};
  display: block;
  font-size: .9375rem;
  line-height: 1.5625rem;

  :first-child {
    color: ${colors.red};
  }
`
