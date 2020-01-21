import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { transform } from 'framer-motion'
import useScroll from '@react-hook/window-scroll'
import { useWindowWidth } from '@react-hook/window-size'

import * as styled from './styled'

const top = {
  open: {
    clipPath: 'circle(200vh at calc(100% - 3.8125rem) 3.6875rem)',
    transition: {
      ease: 'circIn'
    }
  },
  closed: {
    clipPath: 'circle(1.9375rem at calc(100% - 3.8125rem) 3.6875rem)',
    transition: {
      ease: 'circOut',
      delay: 0.5
    }
  }
}

const nav = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const logo = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: 'all',
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100
      }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: 'none',
    transition: {
      delay: 0.35,
      y: {
        stiffness: 1000,
        velocity: -100
      }
    }
  }
}

const spacer = {
  ...logo
}

const item = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const inputRange = [0, 1]

const outputRange = [0, 1]

const Header = ({
  edges: pages
}) => {
  const [homepage, ...menu] = pages

  const width = useWindowWidth()

  const [isOpen, setIsOpen] = useState(() => width >= 768)

  const onClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const scrollY = useScroll(60)

  const output = transform(scrollY, inputRange, outputRange)

  useEffect(() => {
    width >= 768 && setIsOpen(!output)
  }, [output, width])

  return (
    <styled.Header
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      isOpen={isOpen}
    >
      <div className='container'>
        <styled.HeaderWrap>
          <styled.HeaderLogo
            isOpen={isOpen}
            to={homepage.node.fields.slug}
            variants={logo}
          >
            <svg width='42' height='42' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.09 280.97">
              <path fill="#e7354f" d="M234.09 86.99v94.65l-119.6 99.33-60.05-44.78 67.81-56.31h20.21l26.86-39.1.7-.58 27.26 39.68h20.86l-34.73-50.8 50.68-42.09zM181.31 46l-78.21 65v68.82H89.59V141.5l-28.5 23.37-28.5-23.37v38.27H20.27L.62 196.06 52.79 235l72.08-59.86 45-65.81 12.41 18.13 51.2-42.52zm-34.24 81.22H125v15.1h11.76l-25.41 37.39v-.19l-.31.42v-68.42h46.79z"/>
              <path fill="#e7354f" d="M179.66 44.78L60.29 143.9l-41.21-34.25v68.51L0 193.98V99.32L119.6 0l60.06 44.78z"/>
            </svg>
          </styled.HeaderLogo>
          <styled.HeaderSpacer variants={spacer} />
          <styled.HeaderList variants={nav}>
            {menu.map(({
              node: {
                id,
                fields: {
                  slug
                },
                frontmatter: {
                  title
                }
              }
            }) => (
              <styled.HeaderItem key={id} variants={item}>
                <styled.HeaderLink to={slug}>
                  {title}
                </styled.HeaderLink>
              </styled.HeaderItem>
            ))}
          </styled.HeaderList>
          <styled.HeaderBackground variants={top} />
          <styled.HeaderButton isOpen={isOpen} onClick={onClick} />
        </styled.HeaderWrap>
      </div>
    </styled.Header>
  )
}

Header.propTypes = {
  edges: PropTypes.array.isRequired
}

export default Header
