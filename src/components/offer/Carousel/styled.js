import styled from 'styled-components'
import * as colors from '../../../global/variables.scss'

export const Carousel = styled.div`
  background-color: ${colors.white};
  margin: 0;
  position: relative;
  width: 100%;
`

export const CarouselDots = styled.div`
  background-color: ${colors.white};
  bottom: 0;
  display: flex;
  left: 0;
  padding: 0 1rem;
  position: absolute;
  z-index: 1;

  @media (min-width: 48rem) {
    padding: 0 2.5rem;
  }
`

export const CarouselDot = styled.div`
  align-items: center;
  display: flex;
  height: 3.75rem;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 1rem;
  z-index: 1;

  @media (min-width: 48rem) {
    height: 9.375rem;
    width: 2.25rem;
  }

  ::after,
  ::before {
    background-color: ${colors.grey};
    border-radius: 50%;
    content: '';
    height: .25rem;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    width: .25rem;

    @media (min-width: 48rem) {
      height: .5rem;
      width: .5rem;
    }
  }

  ::after {
    background-color: ${colors.red};
    opacity: ${({ isCurrent }) => isCurrent ? '1' : '0'};
    transition: opacity .15s linear;
  }
`

export const CarouselItem = styled.div`

`
