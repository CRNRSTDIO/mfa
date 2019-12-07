import React from 'react'
import PropTypes from 'prop-types'

import { Heading, Body } from '../../shared/'

import * as styled from './styled'

const Landing = ({
  heading,
  image: {
    childImageSharp: {
      fluid
    }
  },
  contents: {
    heading: subheading,
    text
  }
}) => (
  <styled.Landing>
    <styled.LandingBackgroundWrap>
      <styled.LandingBackgroundImage fluid={fluid} />
      <styled.LandingHeaderWrap>
        <div className='container'>
          <styled.LandingHeaderBackground>
            <div className='grid-noBottom'>
              <div className='col-10_xs-12' data-push-left='off-2_xs-0'>
                <styled.LandingHeader>
                  {heading}
                </styled.LandingHeader>
              </div>
            </div>
          </styled.LandingHeaderBackground>
        </div>
      </styled.LandingHeaderWrap>
    </styled.LandingBackgroundWrap>
    <div className='container'>
      <Heading>{subheading}</Heading>
      <Body>{text}</Body>
    </div>
  </styled.Landing>
)

Landing.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default Landing
