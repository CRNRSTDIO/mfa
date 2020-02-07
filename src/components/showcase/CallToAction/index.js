import React from 'react'
import PropTypes from 'prop-types'

import image from './image.svg'
import * as styled from './styled'

const CallToAction = ({
  contact: {
    details = [],
    heading: contactHeading
  },
  heading,
  price,
  price_new: priceNew
}) => (
  <styled.CallToAction>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-6_xs-12'>
          <styled.CallToActionBox className='grid-noBottom'>
            <styled.CallToActionImage src={image} />
            <div className='col-6_xs-12' data-push-left='off-4_xs-0'>
              {priceNew
                ? (
                  <>
                    <styled.CallToActionHeading>
                      {heading}
                    </styled.CallToActionHeading>
                    <styled.CallToActionPrice strikethrough>
                      {price}
                    </styled.CallToActionPrice>
                    <styled.CallToActionLabel>
                      Nowa cena
                    </styled.CallToActionLabel>
                    <styled.CallToActionPriceNew>
                      {priceNew}
                    </styled.CallToActionPriceNew>
                  </>
                )
                : price
                  ? (
                    <>
                      <styled.CallToActionHeading>
                        {heading}
                      </styled.CallToActionHeading>
                      <styled.CallToActionPrice>
                        {price}
                      </styled.CallToActionPrice>
                    </>
                  )
                  : (
                    <styled.CallToActionHeading underline>
                      {heading}
                    </styled.CallToActionHeading>
                  )}
            </div>
          </styled.CallToActionBox>
        </div>
        <div className='col-6_xs-12 grid-noBottom-middle'>
          <div className='col-7_xs-12' data-push-left='off-2_xs-0'>
            <styled.CallToActionSubheading>
              {contactHeading}
            </styled.CallToActionSubheading>
            {details && details.map(({ heading, data }, index) => (
              <styled.CallToActionItem key={index}>
                <styled.CallToActionLabel>
                  {heading}
                </styled.CallToActionLabel>
                <styled.CallToActionBody>
                  {data}
                </styled.CallToActionBody>
              </styled.CallToActionItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  </styled.CallToAction>
)

CallToAction.propTypes = {
  details: PropTypes.array.isRequired,
  contactHeading: PropTypes.string,
  heading: PropTypes.string,
  price: PropTypes.string,
  priceNew: PropTypes.string
}

export default CallToAction
