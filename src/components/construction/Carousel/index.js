import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'
import { Button } from '../../shared/'

import settings from './settings'
import * as styled from './styled'

const Carousel = ({ slide, selectedItem, onChange, prev, next, goTo }) => (
  <styled.Carousel>
    <div className='container'>
      <CarouselPlugin
        selectedItem={selectedItem}
        onChange={onChange}
        {...settings}
      >
        {slide.map(({ image, heading, subheading }, index) => (
          <styled.CarouselItem key={index}>
            <div className='grid-noBottom'>
              <div data-push-left='off-2_xs-0' className='col-4_xs-12'>
                <styled.CarouselItemText>
                  <styled.CarouselItemHeading>{heading}</styled.CarouselItemHeading>
                  <styled.CarouselItemSubheading>{subheading}</styled.CarouselItemSubheading>
                  <Button>Więcej</Button>
                </styled.CarouselItemText>
              </div>
              <div className='col-5_xs-first_md-last_xs-12'>
                <Img fluid={image.childImageSharp.fluid} />
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
              {slide.map((_, index) => (
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
    </div>
  </styled.Carousel>
)

Carousel.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired
}

export default Carousel
