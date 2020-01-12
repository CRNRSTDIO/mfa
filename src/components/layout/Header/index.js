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
            <svg width='42' height='11' xmlns='http://www.w3.org/2000/svg'>
              <path d='M39.989 9.219l-5.335-8.216H33.49l-5.335 8.216h-1.423v1.419h5.125V9.219h-2.01l1.318-2.029h5.818L38.3 9.219h-2.131v1.419h5.12V9.219h-1.3zM31.98 5.93l2.091-3.219 2.091 3.219H31.98zM28.75 1.002H16.54v1.419h1.787v6.8H16.54v1.419h7.2V9.221h-3.992v-2.76h3.283v.748h1.419V4.295h-1.419v.748h-3.283V2.425h7.583v1.5h1.419V1.002zM13.019 9.22v-6.8h1.253V.998h-2.839v.006L7.252 5.993 3.071 1.004V.998H.232v1.419h1.253v6.8H0v1.419h4.08V9.217H2.904v-6.2L6.61 7.436h1.283l3.706-4.419v6.2h-1.176v1.419h4.08V9.217l-1.484.003z' />
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
