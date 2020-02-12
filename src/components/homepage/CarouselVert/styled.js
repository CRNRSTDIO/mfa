import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

export const Carousel = styled.div`
  background-color: ${colors.grey1};
  padding: 1.75rem 0 3.25rem;
  position: relative;

  @media (min-width: 48rem) {
    padding: 3.625rem 0 4.75rem;
  }
`

export const CarouselContainer = styled.div`
  display: flex;
`

export const CarouselItem = styled.div`
  color: ${colors.dark};
  flex-shrink: 0;
  text-align: center;
  width: 100vw;
`

export const CarouselHoverState = styled.div`
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

export const CarouselItemImage = styled.div`
  display: block;
  position: relative;

  @media (min-width: 48rem) {
    margin: 0 1.875rem;
  }

  :hover,
  :focus {
    ${CarouselHoverState} {
      opacity: 1;
    }
  }
`

export const CarouselItemImageBig = styled.div`
  display: block;
  position: relative;

  @media (min-width: 48rem) {
    margin: 0 0 3.625rem;
  }

  :hover,
  :focus {
    ${CarouselHoverState} {
      opacity: 1;
    }
  }
`

export const CarouselItemSoldTag = styled.div`
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

export const CarouselTagLine = styled.div`
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

export const CarouselTagPart = styled.div`
  flex-basis: 50%;
  max-width: 50%;

  :first-child {
    text-align: left;
  }

  :last-child {
    text-align: right;
  }
`

export const CarouselItemLink = styled.p`
  color: ${colors.white};
  display: block;
  font-size: .75rem;
  margin: 0;
  padding: 1.625rem 0 0;
  text-align: center;
  text-decoration: none;
  z-index: 1;
`

export const CarouselItemLabel = styled.span`
  display: block;
  font-size: .4375rem;
  font-weight: 300;
  letter-spacing: .1875rem;
  margin: 0 0 1.25rem;
  text-transform: uppercase;

  @media (min-width: 48rem) {
    font-size: .625rem;
    margin: 0 0 4rem;
  }
`

export const CarouselItemLabelBig = styled(CarouselItemLabel)`
  @media (min-width: 48rem) {
    display: none;
  }
`

export const CarouselItemHeading = styled.h3`
  font-size: .6875rem;
  font-weight: 500;
  margin: 1.5rem 0 .75rem;

  @media (min-width: 48rem) {
    font-size: 1.1875rem;
    margin: 2.25rem 0 1rem;
  }
`

export const CarouselItemHeadingBig = styled.h2`
  font-size: .6875rem;
  font-weight: 500;
  margin: 1.5rem 0 .75rem;

  @media (min-width: 48rem) {
    font-size: 1.4375rem;
    margin: 0 0 .875rem;
  }
`

export const CarouselItemDate = styled.p`
  color: ${colors.grey};
  font-size: .4375rem;
  margin: 0 0 2.875rem;

  @media (min-width: 48rem) {
    font-size: .75rem;
    margin: 0;
  }
`

export const CarouselDots = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: .5rem;
  top: 50%;
  transform: translateY(-50%);
`

export const CarouselDot = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 2.25rem;
  justify-content: center;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  width: 1.25rem;
  z-index: 1;

  ::after,
  ::before {
    background-color: ${colors.grey};
    border-radius: 50%;
    content: '';
    height: .5rem;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: .5rem;
  }

  ::after {
    background-color: ${colors.red};
    opacity: ${({ isCurrent }) => isCurrent ? '1' : '0'};
    transition: opacity .15s linear;
  }
`
