import styled from 'styled-components'
import BackgroundImg from 'gatsby-background-image'
import * as colors from '../../../global/variables.module.scss'

export const Listing = styled.section`

  [class*=grid-] [class*=col-]:last-child {
    margin-top: 1.125rem;

    @media (min-width: 48rem) {
      display: flex;
      justify-content: flex-end;
      margin: 0;
    }
  }
`

export const ListingBoxWrap = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: calc(100% - .3125rem);
`

export const ListingBoxTitle = styled.p`
  color: ${colors.dark};
  font-size: .75rem;
  margin: 0 0 1.5rem;
  position: relative;

  @media (min-width: 48rem) {
    font-size: 1.1875rem;
    margin: 0 0 1.25rem;
  }
`

export const ListingBox = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 1;

  :hover,
  :focus {
    ${ListingBoxTitle} {
      color: ${colors.red};
    }

    ::before {
      opacity: 0.95;
    }
  }

  ::before {
    background-color: ${colors.grey2};
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.9;
    position: absolute;
    top: 0;
    transition: opacity .15s linear;
    width: 100%;
  }
`

export const ListingBoxBackgroundImg = styled(BackgroundImg)`
  filter: grayscale(1);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`
