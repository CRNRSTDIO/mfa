import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Tile = ({
  fields: {
    slug
  },
  frontmatter: {
    showcase_title: title,
    showcase_isSold: isSold,
    showcase_year: year,
    showcase_tags: tags,
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
    <styled.TileImageWrap>
      <styled.TileImg fluid={fluid} alt={alt} />
      <styled.TileHoverState>
        {tags.map(({ tag }, index) => (
          <styled.TileTagLine key={index}>
            {tag.split('-').map((tagPart, index) => (
              <styled.TileTagPart key={index}>
                {tagPart.trim()}
              </styled.TileTagPart>
            ))}
          </styled.TileTagLine>
        ))}
        <styled.TileItemLink>
          Zobacz więcej
        </styled.TileItemLink>
      </styled.TileHoverState>
    </styled.TileImageWrap>
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
