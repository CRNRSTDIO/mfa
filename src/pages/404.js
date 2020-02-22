import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import NotFound from '../components/404'

const NotFoundPage = () => (
  <Layout>
    <SEO title='MFA - Nie znaleziono strony' />
    <NotFound />
  </Layout>
)

export default NotFoundPage
