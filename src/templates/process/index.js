import React from 'react'
import PropTypes from 'prop-types'
import { Explore, Listing, Section, Landing } from '../../components/shared'

const Process = ({
  id,
  process_section_0: section0,
  process_sections: sections
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

Process.propTypes = {
  id: PropTypes.number.isRequired
}

export default Process
