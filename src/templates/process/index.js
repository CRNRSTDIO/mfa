import React from 'react'
import PropTypes from 'prop-types'

import { Explore, Listing, Section, Landing } from '../../components/shared'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'

const Process = ({
  id,
  seo,
  process_section_0: section0,
  process_sections: sections
}) => (
  <Layout>
    <SEO {...seo} />
    <Landing {...section0} {...sections} />
    {sections.map((section, key) => (
      <Section key={key} index={key} {...section} />
    ))}
    <Listing excludeId={id} />
    <Explore />
  </Layout>
)

Process.propTypes = {
  id: PropTypes.number.isRequired
}

export default Process
