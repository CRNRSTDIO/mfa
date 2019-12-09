import React from 'react'
import PropTypes from 'prop-types'
import { Explore, Listing, Section, Landing } from '../../components/shared'

const Standard = ({
  id,
  standard_section_0: section0,
  standard_sections: sections
}) => (
  <>
    <Landing {...section0} {...sections} />
    {sections.map((section, key) => (
      <Section key={key} index={key} {...section} />
    ))}
    <Listing excludeId={id} />
    <Explore />
  </>
)

Standard.propTypes = {
  id: PropTypes.number.isRequired
}

export default Standard
