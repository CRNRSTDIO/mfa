import styled from 'styled-components'
import { rgba } from 'polished'
import * as colors from '../../../global/variables.scss'

export const Carousel = styled.div`
  background-color: ${colors.white};
  color: ${colors.dark};
  position: absolute;
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

`

export const CarouselTab = styled.button`
  background: transparent;
  border: 0;
  font-size: .625rem;
  letter-spacing: .125rem;
  outline: 0;
  padding: 0 1rem 1rem 1rem;
  position: relative;
  text-transform: uppercase;

  ::after {
    background-color: ${colors.red};
    bottom: 0;
    content: '';
    height: 2px;
    left: 0;
    opacity: ${({ isCurrent }) => isCurrent ? '1' : '0'};;
    position: absolute;
    transition: opacity .15s linear;
    width: 100%;
  }
`

export const CarouselItems = styled.div`

`

export const CarouselItem = styled.div`
  height: 30rem;
  padding: 0 1.875rem;
  position: relative;
`

export const CarouselItemImage = styled.div`
  width: 100%;

  @media (min-width: 48rem) {
    position: absolute;
    right: 50%;
    top: 0;
    width: 50%;
  }
`

export const CarouselItemText = styled.div`
  text-align: left;
`

export const CarouselItemHeading = styled.h3`
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin: 0 0 1.5rem;
`

export const CarouselItemSubheading = styled.p`
  font-size: .9375rem;
  line-height: 2rem;
`
