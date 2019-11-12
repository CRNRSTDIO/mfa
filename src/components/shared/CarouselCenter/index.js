import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'

import settings from './settings'
import * as styled from './styled'

const Carousel = ({
  slide,
  selectedItem, onChange, prev, next, goTo
}) => (
  <div className='container'>
    <div className='grid'>
      <div className='col-10_xs-12' data-push-left='off-1_xs-0'>
        <styled.Carousel>
          <CarouselPlugin
            selectedItem={selectedItem}
            onChange={onChange}
            {...settings}
          >
            {slide.map(({ image }, index) => (
              <styled.CarouselItem key={index}>
                <Img fluid={image.childImageSharp.fluid} />
                <styled.CarouselItemText>
                  <styled.CarouselItemHeading>Wolnostojący Dom w Węgorzynie</styled.CarouselItemHeading>
                  <styled.CarouselItemDate>2017</styled.CarouselItemDate>
                </styled.CarouselItemText>
              </styled.CarouselItem>
            ))}
          </CarouselPlugin>
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
        </styled.Carousel>
      </div>
    </div>
  </div>
)

Carousel.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired
}

export default Carousel
