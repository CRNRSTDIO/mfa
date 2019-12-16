import React from 'react'

import { Landing } from '../../components/contact'
import Layout from '../../components/layout'

export default ({
  contact_section_0: section00
}) => (
  <Layout>
    <Landing {...section00} />
  </Layout>
)
