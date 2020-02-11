import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { Heading, Body } from '../../shared'
import * as styled from './styled'

const Materials = ({
  isEnabled,
  heading,
  text,
  logos
}) => (
  isEnabled
    ? (
      <styled.Materials>
        <div className='container'>
          <Heading>
            {heading}
          </Heading>
          <Body>
            {text}
          </Body>
          <div className='grid-noBottom'>
            <div className='col-9_xs-12' data-push-left='off-2_xs-0'>
              <styled.MaterialsLogosWrap>
                {logos && logos.map(({
                  image: {
                    childImageSharp: {
                      fluid
                    }
                  },
                  alt
                }, key) => (
                  <styled.MaterialsLogo key={key}>
                    <Img fluid={fluid} alt={alt} />
                  </styled.MaterialsLogo>
                ))}
              </styled.MaterialsLogosWrap>
            </div>
          </div>
        </div>
      </styled.Materials>
    )
    : null
)

Materials.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Materials
