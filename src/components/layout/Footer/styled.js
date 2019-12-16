import styled from 'styled-components'
import * as colors from '../../../global/variables.module.scss'

export const Footer = styled.footer`
  background-color: ${colors.dark1};
  color: ${colors.grey2};
  padding: 4.25rem 0 .625rem;

  @media (min-width: 48rem) {
    padding: 6rem 0 5.125rem;
  }
`

export const FooterLogo = styled.div`
  color: ${colors.red};
  transform: scale(2);
  transform-origin: left;

  svg {
    fill: currentColor;
  }
`

export const FooterCatchphrase = styled.span`
  display: block;
  font-size: .5625rem;
  letter-spacing: .125rem;
  text-transform: uppercase;

  @media (min-width: 48rem) {
    font-size: .6875rem;
    margin: 1rem 0 0;
  }
`

export const FooterDetails = styled.span`
  display: block;
  font-size: .8125rem;
  line-height: 1.75rem;
  margin: 1.5rem 0;
  white-space: pre-wrap;

  @media (min-width: 48rem) {
    font-size: .9375rem;
    margin: 0 0 5.125rem;
    text-align: right;
  }
`

export const FooterCopy = styled.div`
  align-items: center;
  color: ${colors.grey3};
  display: flex;
  flex-direction: column;
  font-size: .75rem;
  justify-content: space-between;
  position: relative;

  @media (min-width: 48rem) {
    font-size: .75rem;
    flex-direction: row;
  }

  ::after {
    background-color: ${colors.dark};
    content: '';
    height: .125rem;
    left: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateX(-50%);
    width: 100vw;

    @media (min-width: 48rem) {
      width: 100%;
    }
  }
`

export const FooterCopyItem = styled.div`
  background-color: ${colors.dark1};
  margin: 1rem 0;
  z-index: 1;

  @media (min-width: 48rem) {
    margin: 0;
    padding: 0 2.25rem 0 0;

    :last-child {
      padding: 0 0 0 2.25rem;
    }
  }
`
