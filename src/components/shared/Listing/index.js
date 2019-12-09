import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Button from '../Button'

import * as styled from './styled'

const Listing = ({
  excludeId,
  edges: pages
}) => (
  <styled.Listing>
    <div className='container'>
      <div className='grid-noBottom-noGutter-spaceBetween'>
        {pages.filter(({
          node: {
            id
          }
        }) => id !== excludeId).map(({
          node: {
            id,
            fields: {
              slug
            },
            frontmatter: {
              metadata: {
                metadata_listing: {
                  image: {
                    childImageSharp: {
                      fluid
                    }
                  },
                  alt,
                  title
                }
              }
            }
          }
        }) => (
          <div key={id} className='col-6_xs-12'>
            <styled.ListingBoxWrap>
              <styled.ListingBox>
                <styled.ListingBoxTitle>
                  {title}
                </styled.ListingBoxTitle>
                <Button as={Link} to={slug}>Więcej</Button>
              </styled.ListingBox>
              <styled.ListingBoxBackgroundImg
                fluid={fluid}
                style={{ position: 'absolute' }}
                preserveStackingContext
              />
            </styled.ListingBoxWrap>
          </div>
        ))}
      </div>
    </div>
  </styled.Listing>
)

Listing.propTypes = {
  excludeId: PropTypes.number.isRequired,
  edges: PropTypes.array.isRequired
}

export default Listing
