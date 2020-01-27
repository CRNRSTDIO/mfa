import React from 'react'
import PropTypes from 'prop-types'
import { ParallaxProvider } from 'react-scroll-parallax'

import Header from './Header/query'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ParallaxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
