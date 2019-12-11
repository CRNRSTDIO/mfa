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

export const CarouselItemImage = styled.div`
  @media (min-width: 48rem) {
    margin: 0 1.875rem;
  }
`

export const CarouselItemImageBig = styled.div`
  margin: 0 0 3.625rem;
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
  font-size: 1.4375rem;
  font-weight: 500;
  margin: 0 0 .875rem;
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
