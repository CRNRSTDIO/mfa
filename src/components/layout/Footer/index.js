import React from 'react'

import * as styled from './styled'

const Footer = () => (
  <styled.Footer>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-6_xs-12'>
          <styled.FooterLogo>
            <svg width='42' height='42' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 362">
              <path fill="#e7354f" d="M181 0C81.2 0 0 81.2 0 181s81.2 181 181 181 181-81.19 181-181S280.8 0 181 0zm-16.47 220.29v-68.82l78.21-64.94 52.17 38.89-51.2 42.52-12.41-18.13-45 65.81-72.08 59.86-52.17-38.9 19.65-16.29H94V182l28.5 23.37L151 182v38.27zm-42.81-35.87l-41.21-34.25v68.51L61.43 234.5v-94.66L181 40.52l60.09 44.78zm-5.85 92.29l67.81-56.31h20.21l26.86-39.1.7-.58 27.26 39.68h20.86l-34.73-50.8 50.68-42.09v94.65l-119.6 99.33z"/>
              <path fill="#e7354f" d="M172.76 220.23l25.41-37.39h-11.76l-.01-15.1 22.1.01 10.74-15.71h-46.79v68.42l.31-.42v.19z"/>
            </svg>
          </styled.FooterLogo>
          <styled.FooterCatchphrase>
            Nowoczesny standard życia
          </styled.FooterCatchphrase>
        </div>
        <div className='col-6_xs-12'>
          <styled.FooterDetails>
            Michał Filipczuk Architektura
            <br />
            <a href='mailto:michal.filipczuk@mfa.com.pl'>michal.filipczuk@mfa.com.pl</a>
            <br />
            <a href='tel:+ 48 510 375 473'>+ 48 510 375 473</a>
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
