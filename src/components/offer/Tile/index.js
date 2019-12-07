import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import * as styled from './styled'

const Tile = ({
  fields: {
    slug
  },
  frontmatter: {
    showcase_title: title,
    showcase_isSold: isSold,
    showcase_year: year,
    showcase_main_image: {
      alt,
      image: {
        childImageSharp: {
          fluid
        }
      }
    }
  }
}) => (
  <styled.Tile to={slug}>
    {isSold && (
      <styled.TileSold>
        Sprzedane
      </styled.TileSold>
    )}
    <Img fluid={fluid} alt={alt} />
    <styled.TileTitleWrap>
      <styled.TileTitle>
        {title}
      </styled.TileTitle>
    </styled.TileTitleWrap>
    <styled.TileYear>
      {year}
    </styled.TileYear>
  </styled.Tile>
)

Tile.propTypes = {
  fields: PropTypes.object.isRequired,
  frontmatter: PropTypes.object.isRequired
}

export default Tile
