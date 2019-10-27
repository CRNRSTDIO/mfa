import styled from 'styled-components'
import { rgba } from 'polished'
import * as colors from '../../../global/variables.scss'

export const Carousel = styled.div`
  color: ${colors.white};
  position: relative;
`

export const CarouselItem = styled.div`
  align-items: center;
  background-color: ${colors.dark};
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  padding: 0 1.875rem;
  text-align: left;
`

export const CarouselControls = styled.div`
  display: flex;
  margin-bottom: .5rem;
  margin-left: -1.5rem;
  margin-top: -4.375rem;
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

export const CarouselItemText = styled.div`
`

export const CarouselItemHeading = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 2.625rem;
  margin: 0;

  ::after {
    background-color: currentColor;
    content: '';
    display: block;
    height: .125rem;
    margin: 1.25rem 0;
    width: 1rem;

    @media (min-width: 48rem) {
      margin: 2.25rem 0 2rem;
    }
  }

  @media (min-width: 48rem) {
    font-size: 2.5rem;
    line-height: 3.625rem;
  }
`

export const CarouselItemSubheading = styled.h3`
  font-size: 1.4375rem;
  font-weight: 500;
  margin: 0;
`

export const CarouselItemTags = styled.div`
  margin-top: 1.75rem;

  @media (min-width: 48rem) {
    margin-top: 1rem;
  }
`

export const CarouselItemTag = styled.span`
  font-size: .75rem;
  font-weight: 300;

  & + & {
    margin-left: 2.625rem;
  }
`

export const CarouselDots = styled.div`
  bottom: 4.625rem;
  display: flex;
  padding: 0 1.875rem;
  position: absolute;
`

export const CarouselDot = styled.button`
  align-items: center;
  background-color: ${({ isCurrent }) => isCurrent ? colors.red : 'transparent'};
  border: 0;
  border-radius: 50%;
  color: currentColor;
  display: flex;
  font-size: .625rem;
  height: 3.25rem;
  justify-content: center;
  outline: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 3.25rem;
  z-index: 1;

  & + & {
    margin-left: .25rem;
  }

  :hover,
  :focus {
    ::after {
      opacity: ${({ isCurrent }) => isCurrent ? '0' : '1'};
    }
  }

  ::after {
    background-color: ${rgba(colors.dark, 0.5)};
    content: '';
    height: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .15s linear;
    width: 100%;
    z-index: -1;
  }
`
