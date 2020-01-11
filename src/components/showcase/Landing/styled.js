import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

export const Landing = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  min-height: 100vh;
  padding: 11.875rem 0 0 0;
  width: 100vw;

  @media (min-width: 48rem) {
    flex-wrap: nowrap;
  }
`

export const LandingHeading = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.625rem;
  margin: 0;

  @media (min-width: 48rem) {
    font-size: 3.25rem;
    line-height: 4rem;
  }
`

export const LandingLabel = styled.span`
  align-items: center;
  display: flex;
  font-size: .75rem;
  margin: 0 0 1.25rem;
  position: relative;

  @media (min-width: 48rem) {
    margin: 0 0 3.5rem;
  }

  ::before {
    border: .125rem solid ${colors.red};
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 1.5rem;
    margin: 0 .75rem 0 0;
    width: 1.5rem;
  }
`

export const LandingTags = styled.div`

  ::before {
    background-color: ${colors.red};
    content: '';
    display: inline-block;
    height: 1px;
    margin: 2.25rem 0;
    width: 1rem;
  }
`

export const LadingTagLine = styled.div`

  & + & {
    margin: 1rem 0 2.25rem;
  }
`

export const LandingTag = styled.div`
  display: inline-block;
  font-size: .875rem;
  width: 7.5rem;
`
