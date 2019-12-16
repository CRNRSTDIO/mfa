import styled from 'styled-components'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import * as colors from '../../../global/variables.module.scss'

export const Header = styled(motion.header)`
  height: 100vh;
  left: 0;
  overflow: hidden;
  pointer-events: ${({ isOpen }) => isOpen ? 'all' : 'none'};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;

  @media (min-width: 48rem) {
    align-items: center;
    display: flex;
    height: 7.375rem;
  }
`

export const HeaderLogo = styled(Link)`
  color: ${colors.dark};
  color: ${({ isOpen }) => isOpen && colors.white};
  display: block;
  margin: 3rem 0;
  pointer-events: all;
  z-index: 1;

  svg {
    fill: currentColor;
    transition: fill .15s linear;
  }

  @media (min-width: 48rem) {
    color: ${colors.dark};
    color: ${({ isOpen }) => isOpen && colors.dark};
    margin: 0;
  }
`

export const HeaderWrap = styled.div`

  @media (min-width: 48rem) {
    display: flex;
    justify-content: flex-start;
  }
`

export const HeaderSpacer = styled.div`
  display: none;

  @media (min-width: 48rem) {
    align-items: center;
    display: flex;
    flex-basis: 21.25rem;
    flex-shrink: 1;
    justify-content: center;
    z-index: 1;

    ::after {
      background-color: ${colors.red};
      content: '';
      height: 1px;
      width: 1rem;
    }
  }
`

export const HeaderBackground = styled(motion.div)`
  background-color: ${colors.red};
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1;

  @media (min-width: 48rem) {
    background-color: ${colors.white};
  }
`

export const HeaderButton = styled.button`
  align-items: center;
  background-color: ${colors.red};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 3.875rem;
  justify-content: center;
  margin: 0;
  outline: 0;
  padding: 0;
  pointer-events: all;
  position: absolute;
  right: 1.875rem;
  top: 1.75rem;
  width: 3.875rem;
  z-index: 3;

  @media (min-width: 48rem) {

  }

  ::after,
  ::before {
    background-color: ${colors.white};
    content: '';
    height: .125rem;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform .15s linear;
    width: 1rem;
  }

  ::after {
    transform: ${({ isOpen }) => isOpen
      ? 'translateX(-50%) translateY(-50%) rotate(45deg)'
      : 'translateX(-50%) translateY(-50%) translateY(.1875rem)'
    };
  }

  ::before {
    transform: ${({ isOpen }) => isOpen
      ? 'translateX(-50%) translateY(-50%) rotate(-45deg)'
      : 'translateX(-50%) translateY(-50%) translateY(-.1875rem)'
    };
  }
`

export const HeaderList = styled(motion.ul)`
  height: calc(100vh - 7.75rem - 5.75rem);
  left: 0;
  list-style: none;
  margin: 7.75rem 0 5.75rem;
  overflow-y: scroll;
  padding: 0;
  position: fixed;
  scrollbar-color: ${colors.red} ${colors.red};
  top: 0;
  width: 100vh;
  z-index: 2;

  @media (min-width: 48rem) {
    display: inline-flex;
    height: auto;
    margin: 0;
    position: relative;
    width: auto;
  }
`

export const HeaderItem = styled(motion.li)`
  margin: 1.25rem 0 0;

  & + & {
    margin: 2.5rem 0 0;
  }

  :last-child {
    margin-bottom: 1rem;
  }

  @media (min-width: 48rem) {
    margin: 0;

    :last-child {
      margin: 0;
    }

    & + & {
      margin: 0 0 0 4rem;
    }
  }
`

export const HeaderLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.3125rem;
  font-weight: 500;
  padding: 0 1.875rem;
  text-decoration: none;
  text-transform: capitalize;

  @media (min-width: 48rem) {
    color: ${colors.dark};
    font-size: .625rem;
    padding: 0;
  }
`
