import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

export const CallToAction = styled.section`
  background-color: ${colors.grey1};
  padding: 4.375rem 0 2.75rem;

  @media (min-width: 48rem) {
    padding: 6.25rem 0 9.375rem;
  }
`

export const CallToActionBox = styled.div`
  margin: 0 0 3.75rem;
  padding: 3.75rem 0 3.125rem;
  position: relative;
  z-index: 0;

  @media (min-width: 48rem) {
    margin: 0;
  }

  ::before {
    background-color: ${colors.white};
    content: '';
    height: 100%;
    position: absolute;
    right: 50%;
    top: 0;
    transform: translateX(50%);
    width: 100vw;
    z-index: -1;

    @media (min-width: 48rem) {
      right: .5rem;
      transform: none;
      width: calc(100% - 1rem);
    }
  }
`

export const CallToActionImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-50%);

  @media (min-width: 48rem) {
    top: 50%;
    transform: translate(50%, -50%) translateX(-.375rem);
  }
`

export const CallToActionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  padding: ${({ underline }) => underline ? '0 0 2rem' : '0 0 1.5rem'};
  position: relative;

  ::after {
    background-color: ${colors.red};
    content: '';
    display: ${({ underline }) => underline ? 'block' : 'none'};
    height: 3px;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
  }

  @media (min-width: 48rem) {
    line-height: 3.125rem;
    padding: ${({ underline }) => underline ? '0 0 3.75rem' : '0 0 1.5rem'};
  }
`

export const CallToActionSubheading = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2.25rem;
  margin: 0 0 1.75rem;
`

export const CallToActionLabel = styled.span`
  display: block;
  font-size: .625rem;
  letter-spacing: .1875rem;
  margin: 0 0 .875rem;
  text-transform: uppercase;
`

export const CallToActionPrice = styled.span`
  display: block;
  font-size: 2rem;
  line-height: 1;
  margin: 0 0 2.25rem;
  text-decoration: ${({ strikethrough }) => strikethrough ? 'line-through' : 'none'};
`

export const CallToActionPriceNew = styled(CallToActionPrice)`
  color: ${colors.red};
  font-size: 2.75rem;
  margin: 0;
`

export const CallToActionPricePart = styled.p`
  margin: 0;

  :nth-child(2n) {
    margin-top: .5rem;
  }

  :nth-child(2n + 1) {
    margin-top: 1rem;
  }
`

export const CallToActionBody = styled.a`
  color: inherit;
  font-size: .9375rem;
  margin: 0;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
  }
`

export const CallToActionItem = styled.div`
  & + & {
    margin-top: 1.875rem;
  }
`
