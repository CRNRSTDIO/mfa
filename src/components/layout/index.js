import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header/query'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
