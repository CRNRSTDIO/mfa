import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

export const CarouselHeader = styled.div`
  margin: 6rem 0 1rem;

  @media (min-width: 48rem) {
    margin: 8.25rem 0 3rem;
  }
`

export const Carousel = styled.div`
  background-color: ${colors.white};
  color: ${colors.dark};
  margin: 0 auto;
  position: relative;
  width: 100vw;
`

export const CarouselControls = styled.div`
  display: flex;
  margin-bottom: .5rem;
  margin-left: -1.5rem;
`

const CarouselArrow = styled.button`
  background: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  outline: 0;
  padding: 1.5rem;

  ::before {
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
  ::before {
    left: -.125rem;
    transform: rotate(45deg);
  }
`

export const CarouselArrowLeft = styled(CarouselArrow)`
  ::before {
    left: .125rem;
    transform: rotate(-135deg);
  }
`

export const CarouselTabs = styled.div`
  margin-bottom: 2.875rem;

  @media (min-width: 48rem) {
    margin-bottom: 4.875rem;
  }
`

export const CarouselTab = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: .625rem;
  letter-spacing: .125rem;
  outline: 0;
  padding: 0 1rem 1rem 1rem;
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;

  @media (min-width: 48rem) {
    padding: 0 0 1.125rem;
    text-align: left;
    width: 100%;
  }

  ::after {
    background-color: ${colors.red};
    bottom: 0;
    content: '';
    height: .125rem;
    left: 0;
    opacity: ${({ isCurrent }) => isCurrent ? '1' : '0'};;
    position: absolute;
    transition: opacity .15s linear;
    width: 100%;
  }
`

export const CarouselItems = styled.div`
`

export const CarouselContainer = styled.div`
  display: flex;
`

export const CarouselItem = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 100vw;
`

export const CarouselItemImage = styled.div`

  @media (min-width: 48rem) {
    left: 0;
    margin: 0;
    position: absolute;
    top: 0;
    width: calc(50% - 8.33333%);
  }
`

export const CarouselItemText = styled.div`
  padding: .75rem 0 0;
  text-align: left;

  @media (min-width: 48rem) {
    margin-top: -1.5rem;
    padding: 0;
  }
`

export const CarouselItemHeading = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.875rem;
  margin: 0 0 1.5rem;

  @media (min-width: 48rem) {
    font-size: 1.875rem;
    line-height: 2.875rem;
    margin: 0 0 4rem;
  }
`

export const CarouselItemSubheading = styled.p`
  font-size: .9375rem;
  line-height: 2rem;
`
