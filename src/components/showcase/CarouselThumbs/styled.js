import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

export const Carousel = styled.div`
  margin-left: -1.875rem;
  width: 100vw;

  @media (min-width: 48rem) {
    margin: auto;
    width: auto;
  }
`

export const CarouselItems = styled.div`
  position: relative;

  ::before,
  ::after {
    background-color: ${colors.grey1};
    content: '';
    height: 50%;
    position: absolute;
    right: 100%;
    top: 50%;
    width: 100vw;
  }

  ::after {
    left: 100%;
  }
`

export const CarouselContainer = styled.div`
  display: flex;
`

export const CarouselItem = styled.div`
  flex-shrink: 0;
  height: auto;
  width: 100%;

  @media (min-width: 48rem) {
    ${'' /* max-height: 80vh; */}
  }
`

export const CarouselThumbs = styled.div`
  background-color: ${colors.grey1};
  padding: .25rem 0 0;
  position: relative;

  ::before,
  ::after {
    background-color: ${colors.grey1};
    content: '';
    height: 100%;
    position: absolute;
    right: 100%;
    top: 0;
    width: 100vw;
  }

  ::after {
    left: 100%;
  }

  @media (min-width: 48rem) {
    padding: .75rem 0 0;
  }

  > div:first-child {
    margin: 0 -.125rem;
    overflow: hidden;
    width: calc(100% + .25rem);

    @media (min-width: 48rem) {
      margin: 0 -.3125rem;
      width: calc(100% + .625rem);
    }
  }
`

export const CarouselThumb = styled.div`
  flex-basis: 25%;
  flex-shrink: 0;
  height: 3.125rem;
  padding: 0 .125rem;

  @media (min-width: 48rem) {
    height: 11.25rem;
    padding: 0 .3125rem;
  }
`

export const CarouselThumbInside = styled.div`
  margin: 0
`

const CarouselArrow = styled.button`
  background: transparent;
  border: 0;
  color: currentColor;
  outline: 0;
  padding: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  ::before {
    border-color: ${colors.white} ${colors.white} transparent transparent;
    border-style: solid;
    border-width: .1875rem .1875rem 0 0;
    content: '';
    display: inline-block;
    height: .75rem;
    position: relative;
    width: .75rem;
  }
`

export const CarouselArrowRight = styled(CarouselArrow)`
  right: 0;

  ::before {
    left: -.125rem;
    transform: rotate(45deg);
  }
`

export const CarouselArrowLeft = styled(CarouselArrow)`
  left: 0;

  ::before {
    left: .125rem;
    transform: rotate(-135deg);
  }
`

export const CarouselCounter = styled.div`
  align-items: center;
  bottom: .5rem;
  color: ${colors.white};
  display: flex;
  font-size: .4375rem;
  height: 1.875rem;
  justify-content: center;
  position: absolute;
  right: .5rem;
  width: 5.375rem;

  @media (min-width: 48rem) {
    bottom: 1.25rem;
    font-size: 1rem;
    height: 3.5rem;
    right: 1.25rem;
    width: 10rem;
  }

  ::before {
    background-color: ${colors.dark};
    content: '';
    height: 100%;
    opacity: .5;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`

export const CarouselCounterText = styled.span`
  font-weight: 500;
  margin: 0 0 0 .75rem;
  position: relative;
  z-index: 1;

  @media (min-width: 48rem) {
    margin: 0 0 0 .875rem;
  }
`

export const CarouselCounterIcon = styled.div`
  background-color: ${colors.white};
  height: .625rem;
  position: relative;
  width: 1.125rem;

  @media (min-width: 48rem) {
    height: 1.125rem;
    width: 2rem;
  }

  ::after {
    border-color: ${colors.white} ${colors.white} transparent transparent;
    border-style: solid;
    border-width: .125rem .125rem 0 0;
    content: '';
    height: 100%;
    position: absolute;
    right: -.25rem;
    top: -.3125rem;
    width: 100%;
  }
`
