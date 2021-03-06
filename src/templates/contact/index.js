import React from 'react'

import { Landing } from '../../components/contact'
import { Form } from '../../containers/contact'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'

export default ({
  seo,
  contact_section_0: section00,
  ...privacyPolicy
}) => (
  <Layout>
    <SEO {...seo} />
    <Landing {...section00} />
    <Form {...privacyPolicy} />
  </Layout>
)
