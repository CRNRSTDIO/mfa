import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Landing = ({
  address,
  email,
  heading,
  phone
}) => (
  <styled.Landing>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-12'>
          <styled.LandingHeading>
            {heading}
          </styled.LandingHeading>
        </div>
        <div className='col-12'>
          <div className='grid-noBottom'>
            <div className='col-9_xs-12'>
              <styled.LandingHuge href={`tel:${phone.substr(phone.lastIndexOf('+'))}`}>
                {phone}
              </styled.LandingHuge>
              <styled.LandingHuge href={`mailto:${email}`}>
                {email}
              </styled.LandingHuge>
            </div>
            <div className='col-3_xs-12'>
              <styled.LandingData>
                {address && address.split('\n').map((line, index) => (
                  <styled.LandingDataLine key={index}>
                    {line}
                  </styled.LandingDataLine>)
                )}
              </styled.LandingData>
            </div>
          </div>
        </div>
      </div>
    </div>
  </styled.Landing>
)

Landing.propTypes = {
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default Landing
