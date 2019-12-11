import styled from 'styled-components'
import { Link } from 'gatsby'
import * as colors from '../../../global/variables.module.scss'
import { Label } from '../Label/styled'

export const Explore = styled.section`
  margin: 3rem 0 4rem;

  @media (min-width: 48rem) {
    margin: 10rem 0 6.25rem
  }

  ${Label} {
    margin: 0 0 3rem;

    @media (min-width: 48rem) {
      margin: 0 0 3.75rem;
    }
  }
`

export const ExploreHeading = styled.h3`
  border-bottom: 1px solid ${colors.red};
  color: ${colors.dark};
  display: inline;
  font-size: 2.125rem;
  font-weight: 500;
  line-height: 2.8125rem;

  @media (min-width: 48rem) {
    border-bottom-width: .125rem;
    font-size: 3.75rem;
    line-height: 5rem;
  }
`

export const ExploreLinks = styled.div`
  margin: 3.25rem 0 0;

  @media (min-width: 48rem) {
    margin: 0;
  }
`

export const ExploreLinkWrapper = styled.div`
  & + & {
    margin-top: 1.375rem;
  }
`

export const ExploreLink = styled(Link)`
  border-bottom: 1px solid ${colors.red};
  color: ${colors.red};
  display: inline-block;
  font-size: .4375rem;
  letter-spacing: .4375rem;
  padding: .4375rem 0;
  text-decoration: none;
  text-transform: uppercase;

  :hover,
  :focus {
    border-color: ${colors.dark};
    color: ${colors.dark};
  }

  @media (min-width: 48rem) {
    font-size: .75rem;
  }
`
