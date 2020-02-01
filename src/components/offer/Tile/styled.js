import styled from 'styled-components'
import { Link } from 'gatsby'
import * as colors from '../../../global/variables.module.scss'

export const TileTitleWrap = styled.div`
  margin: 1.25rem 0 .5rem;

  @media (min-width: 48rem) {
    margin: 1.75rem 0 .75rem;
  }
`

export const TileTitle = styled.p`
  border-bottom: 1px solid transparent;
  display: inline;
  font-size: .75rem;
  font-weight: 500;

  @media (min-width: 48rem) {
    font-size: 1.1875rem;
    margin: 1.75rem 0 .75rem;
  }
`

export const TileHoverState = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  justify-content: center;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity .15s linear;

  ::before {
    background-color: ${colors.dark1};
    bottom: 0;
    content: '';
    left: 0;
    opacity: .7;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const Tile = styled(Link)`
  color: ${colors.dark};
  display: block;
  margin: 0 0 2.375rem;
  position: relative;
  text-align: center;
  text-decoration: none;

  @media (min-width: 48rem) {
    margin: 0 0 4.25rem;
  }

  :hover,
  :focus {
    color: ${colors.red};

    ${TileHoverState} {
      opacity: 1;
    }

    ${TileTitle} {
      border-color: ${colors.red};
    }
  }
`

export const TileImageWrap = styled.div`
  position: relative;
`

export const TileTagLine = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid ${colors.white};
  color: ${colors.white};
  display: flex;
  font-size: .75rem;
  height: 2.5rem;
  margin: 0 auto;
  position: relative;
  width: 11.25rem;

  ::after {
    background-color: ${colors.white};
    bottom: 0;
    content: '';
    height: 100%;
    position: absolute;
    right: 50%;
    width: 1px;
  }

  & + & {
    align-items: center;
    height: 3.125rem;
  }
`

export const TileTagPart = styled.div`
  flex-basis: 50%;
  max-width: 50%;

  :first-child {
    text-align: left;
  }

  :last-child {
    text-align: right;
  }
`

export const TileItemLink = styled.p`
  color: ${colors.white};
  display: block;
  font-size: .75rem;
  margin: 0;
  padding: 1.625rem 0 0;
  text-align: center;
  text-decoration: none;
  z-index: 1;
`

export const TileYear = styled.span`
  color: ${colors.grey};
  display: block;
  font-size: .4375rem;
  text-align: center;

  @media (min-width: 48rem) {
    font-size: .75rem;
  }
`

export const TileSold = styled.div`
  align-items: center;
  background-color: ${colors.red};
  border-radius: 50%;
  color: ${colors.white};
  display: flex;
  font-size: .4375rem;
  font-weight: 500;
  height: 4.625rem;
  justify-content: center;
  left: -1rem;
  letter-spacing: .1875rem;
  position: absolute;
  text-transform: uppercase;
  top: 1rem;
  width: 4.625rem;
  z-index: 1;

  @media (min-width: 48rem) {
    font-size: .5625rem;
    height: 6.625rem;
    width: 6.625rem;
  }
`
