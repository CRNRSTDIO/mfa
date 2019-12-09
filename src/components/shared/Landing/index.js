import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Landing = ({
  text,
  image: {
    childImageSharp: {
      fluid
    }
  },
  alt,
  ...sections
}) => (
  <styled.Landing>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col'>
          <styled.LandingHeader>
            {text}
          </styled.LandingHeader>
          {Object.values(sections).map(({ heading }, key) => (
            <styled.LandingSubheading key={key}>
              {heading}
            </styled.LandingSubheading>
          ))}
        </div>
      </div>
    </div>
    <styled.LandingBackgroundImage
      fluid={fluid}
      alt={alt}
      style={{ position: 'absolute' }}
    />
  </styled.Landing>
)

Landing.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  alt: PropTypes.string
}

export default Landing
