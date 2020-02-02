import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Section = ({
  heading,
  text,
  image: {
    childImageSharp: {
      fluid
    }
  },
  alt,
  index,
  isLast
}) => (
  <styled.Section>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-4_xs-12'>
          <styled.SectionHeading>
            <div className='grid-noBottom'>
              <div className='col-6_xs-12' data-push-left='off-6_xs-0'>
                {heading}
              </div>
            </div>
          </styled.SectionHeading>
          <styled.SectionNumber>
            <div className='grid-noBottom'>
              <div className='col-6_xs-12' data-push-left='off-6_xs-0'>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </styled.SectionNumber>
        </div>
        <div className='col-6_xs-12' data-push-left='off-2_xs-0'>
          <styled.SectionBody>
            {text}
          </styled.SectionBody>
        </div>
        {
          isLast
            ? (
              <styled.SectionSpacer />
            )
            : (
              <div className='col-12'>
                <styled.SectionImage fluid={fluid} alt={alt} />
              </div>
            )
        }
      </div>
    </div>
  </styled.Section>
)

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  alt: PropTypes.string,
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired
}

export default Section
