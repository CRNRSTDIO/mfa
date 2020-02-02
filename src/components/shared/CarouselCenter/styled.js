import styled from 'styled-components'
import BackgroundImg from 'gatsby-background-image'

import * as colors from '../../../global/variables.module.scss'

export const Carousel = styled.div`
  margin: 3.125rem 0 5rem;
  width: 100%;

  .wrap {
    overflow: visible !important;
  }

  @media (min-width: 48rem) {
    margin: 5.25rem 0;
  }
`

export const CarouselContainer = styled.div`
  display: flex;
  margin: 0 -.5rem;
  width: calc(100% + 1rem);

  @media (min-width: 48rem) {
    margin: 0 -3rem;
    width: calc(100% + 6rem);
  }
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

export const CarouselItem = styled.div`
  display: block;
  padding: 0 .5rem;
  flex-shrink: 0;
  text-decoration: none;
  width: 100%;

  :hover,
  :focus {
    ${CarouselHoverState} {
      opacity: 1;
    }
  }

  @media (min-width: 48rem) {
    padding: 0 3rem;
  }
`

export const CarouselImg = styled(BackgroundImg)`
  height: 10rem;

  @media (min-width: 48rem) {
    height: 26.25rem;
  }
`

export const CarouselItemWrap = styled.div`
  position: relative;
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

export const CarouselItemText = styled.div`
  margin: 2rem 0 2.5rem;
  text-align: left;

  @media (min-width: 48rem) {
    margin: 2.25rem 0 3rem;
  }
`

export const CarouselItemHeading = styled.h3`
  color: ${colors.dark};
  font-size: 1.1875rem;
  font-weight: 500;
  margin: 0 .75rem .75rem;
`

export const CarouselItemDate = styled.p`
  color: ${colors.grey};
  font-size: .75rem;
  font-weight: 300;
  margin: 0;
`

export const CarouselControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const CarouselDots = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const CarouselDot = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 1.25rem;
  justify-content: center;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  width: 2.25rem;
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

export const CarouselArrow = styled.button`
  background: transparent;
  border: 0;
  color: currentcolor;
  cursor: pointer;
  height: 30px;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  width: 50px;

  ::before {
    border-color: ${colors.grey} ${colors.grey} transparent transparent;
    border-style: solid;
    border-width: .125rem .125rem 0 0;
    content: '';
    height: 1rem;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(4px, -50%) rotate(-135deg);
    width: 1rem;
  }

  ::after {
    background-color: ${colors.grey};
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-22px);
    width: 28px;
  }
`

export const CarouselArrowRight = styled(CarouselArrow)`
  transform: scaleX(-1);
`

export const CarouselArrowLeft = styled(CarouselArrow)`
`
