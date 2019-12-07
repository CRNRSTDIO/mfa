import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'
import { Heading, Button } from '../../shared/'

import settings from './settings'
import * as styled from './styled'

const Reviews = ({
  heading,
  text,
  details,
  opinions,
  selectedItem,
  onChange,
  prev,
  next,
  goTo
}) => (
  <styled.Reviews>
    <div className='container'>
      <Heading>{heading}</Heading>
      <styled.ReviewBody>
        <div className='grid-noBottom'>
          <div className='col-3_xs-12' data-push-left='off-2_xs-0'>
            {text}
          </div>
          {details.map(({ heading, data }, index) => (
            <div key={index} className='col-1_xs-12' data-push-left='off-1_xs-0'>
              <styled.ReviewDetailsHeading>
                {heading}
              </styled.ReviewDetailsHeading>
              <styled.ReviewDetailsData>
                {data}
              </styled.ReviewDetailsData>
            </div>
          ))}
        </div>
      </styled.ReviewBody>
      <styled.Carousel>
        <CarouselPlugin
          selectedItem={selectedItem}
          onChange={onChange}
          {...settings}
        >
          {opinions.map(({
            alt,
            image: {
              childImageSharp: {
                fluid
              }
            },
            text,
            subtext,
            link
          }, index) => (
            <styled.CarouselItem key={index}>
              <div className='grid-noBottom'>
                <div data-push-left='off-2_xs-0' className='col-4_xs-12'>
                  <styled.CarouselItemText>
                    <styled.CarouselItemHeading>{text}</styled.CarouselItemHeading>
                    <styled.CarouselItemSubheading>{subtext}</styled.CarouselItemSubheading>
                    <Button as='a' href={link}>Więcej</Button>
                  </styled.CarouselItemText>
                </div>
                <div className='col-5_xs-first_md-last_xs-12'>
                  <Img fluid={fluid} alt={alt} />
                </div>
              </div>
            </styled.CarouselItem>
          ))}
        </CarouselPlugin>
        <div className='grid-noBottom-noGutter'>
          <div data-push-left='off-2_xs-0' className='col-9_xs-12'>
            <styled.CarouselControls>
              <styled.CarouselArrowLeft onClick={prev} />
              <styled.CarouselDots>
                {opinions.map((_, index) => (
                  <styled.CarouselDot
                    key={index}
                    onClick={() => goTo(index)}
                    isCurrent={selectedItem === index}
                  />
                ))}
              </styled.CarouselDots>
              <styled.CarouselArrowRight onClick={next} />
            </styled.CarouselControls>
          </div>
        </div>
      </styled.Carousel>
    </div>
  </styled.Reviews>
)

Reviews.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  opinions: PropTypes.array.isRequired,
  selectedItem: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired
}

export default Reviews
