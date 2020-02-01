import React from 'react'
import PropTypes from 'prop-types'

import { Explore, Listing, Section, Landing } from '../../components/shared'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'

const Standard = ({
  id,
  seo,
  standard_section_0: section0,
  standard_sections: sections
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

Standard.propTypes = {
  id: PropTypes.number.isRequired
}

export default Standard
