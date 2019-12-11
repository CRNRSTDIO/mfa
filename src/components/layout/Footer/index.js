import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Footer = () => (
  <styled.Footer>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-6_xs-12'>
          <styled.FooterCatchphrase>
            Nowoczesny standard życia
          </styled.FooterCatchphrase>
        </div>
        <div className='col-6_xs-12'>
          <styled.FooterDetails>
            Michał Filipczuk Architektura
            <br />
            michal@mfa.com.pl
            <br />
            + 48 510 375 473
          </styled.FooterDetails>
        </div>
        <div className='col-12'>
          <styled.FooterCopy>
            <styled.FooterCopyItem>
              &copy; {new Date().getFullYear()} Copyright MFA.
            </styled.FooterCopyItem>
            <styled.FooterCopyItem>
              Wszystkie prawa zastrzeżone.
            </styled.FooterCopyItem>
          </styled.FooterCopy>
        </div>
      </div>
    </div>
  </styled.Footer>
)

export default Footer
