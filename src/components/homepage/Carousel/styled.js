import styled from 'styled-components'
import BackgroundImg from 'gatsby-background-image'
import * as colors from '../../../global/variables.module.scss'

export const Carousel = styled.div`
  color: ${colors.white};
  position: relative;
`

export const CarouselContainer = styled.div`
  display: flex;
`

export const CarouselItem = styled.div`
  align-items: center;
  background-color: ${colors.dark};
  display: flex;
  flex-shrink: 0;
  height: 100vh;
  justify-content: flex-start;
  position: relative;
  text-align: left;
  width: 100vw;
`

export const CarouselItemBackgroundImage = styled(BackgroundImg)`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
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

export const CarouselItemText = styled.div`
  position: relative;
  z-index: 0;
`

export const CarouselItemHeading = styled.h2`
  color: ${colors.white};
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 2.625rem;
  margin: 0;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
  }

  ::after {
    background-color: currentColor;
    content: '';
    display: block;
    height: .125rem;
    margin: 1.25rem 0;
    pointer-events: none;
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
  text-shadow: 0 0 .5rem ${colors.dark};
  white-space: pre-wrap;

  @media (min-width: 48rem) {
    margin-top: 1rem;
  }
`

export const CarouselItemTag = styled.span`
  display: block;
  font-size: .75rem;
  font-weight: 300;

  @media (min-width: 48rem) {
    display: inline-block;
  }

  & + & {
    margin: .5rem 0 0 0;

    @media (min-width: 48rem) {
      margin: 0 0 0 2.625rem;
    }
  }
`

export const CarouselDots = styled.div`
  bottom: 4.625rem;
  display: flex;
  position: absolute;
`

export const CarouselDot = styled.button`
  align-items: center;
  background-color: ${({ isCurrent }) => isCurrent ? colors.red : 'transparent'};
  border: 0;
  border-radius: 50%;
  color: currentColor;
  cursor: pointer;
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
      opacity: ${({ isCurrent }) => isCurrent ? '0' : '0.5'};
    }
  }

  ::after {
    background-color: ${colors.dark};
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
