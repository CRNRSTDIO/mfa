import React from 'react'

import * as styled from './styled'

const Footer = () => (
  <styled.Footer>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-6_xs-12'>
          <styled.FooterLogo>
            <svg width='42' height='11' xmlns='http://www.w3.org/2000/svg'>
              <path d='M39.989 9.219l-5.335-8.216H33.49l-5.335 8.216h-1.423v1.419h5.125V9.219h-2.01l1.318-2.029h5.818L38.3 9.219h-2.131v1.419h5.12V9.219h-1.3zM31.98 5.93l2.091-3.219 2.091 3.219H31.98zM28.75 1.002H16.54v1.419h1.787v6.8H16.54v1.419h7.2V9.221h-3.992v-2.76h3.283v.748h1.419V4.295h-1.419v.748h-3.283V2.425h7.583v1.5h1.419V1.002zM13.019 9.22v-6.8h1.253V.998h-2.839v.006L7.252 5.993 3.071 1.004V.998H.232v1.419h1.253v6.8H0v1.419h4.08V9.217H2.904v-6.2L6.61 7.436h1.283l3.706-4.419v6.2h-1.176v1.419h4.08V9.217l-1.484.003z' />
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
