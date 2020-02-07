import React from 'react'
import PropTypes from 'prop-types'

import Tile from '../Tile'

const Listing = ({
  selectedOption,
  edges: showcases = []
}) => (
  <div className='col-10_xs-12 grid-noBottom'>
    {(
      { 1: showcases }[selectedOption] ||
      { 0: showcases && showcases.filter(({ node: { frontmatter: { showcase_isSold: isSold } } }) => isSold === Boolean(selectedOption)) }[selectedOption]
    ).map(({ node: { id, ...showcase } }) => (
      <div key={id} className='col-5_xs-12' data-push-left='off-1_xs-0'>
        <Tile {...showcase} />
      </div>
    ))}
  </div>
)

Listing.propTypes = {
  selectedOption: PropTypes.number.isRequired,
  edges: PropTypes.array.isRequired
}

export default Listing
