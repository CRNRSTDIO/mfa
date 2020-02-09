import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import * as styled from './styled'

const Standard = ({
  heading,
  text,
  alt,
  image: {
    childImageSharp: {
      fluid
    }
  }
}) => (
  <styled.Standard>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-5_xs-12'>
          <Img fluid={fluid} alt={alt} />
        </div>
        <div className='col-5_xs-12' data-push-left='off-1_xs-0'>
          <styled.StandardInner>
            <styled.StandardTextWrap>
              <styled.StandardHeading>{heading}</styled.StandardHeading>
              <styled.StandardText>{text}</styled.StandardText>
            </styled.StandardTextWrap>
          </styled.StandardInner>
        </div>
      </div>
    </div>
  </styled.Standard>
)

Standard.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}

export default Standard
