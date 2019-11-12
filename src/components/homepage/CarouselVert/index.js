import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'
import { Button } from '../../shared/'

import settings from './settings'
import * as styled from './styled'

const Carousel = ({
  slide,
  selectedItem, onChange, prev, next, goTo
}) => (
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
              <div className='grid-noBottom-middle col-12'>
                <div className='col-7 xs-hidden'>
                  <styled.CarouselItemImageBig>
                    <Img fluid={image.childImageSharp.fluid} />
                  </styled.CarouselItemImageBig>
                </div>
                <div className='col-4_xs-10' data-push-left='off-1'>
                  <styled.CarouselItemLabel>Domy na sprzedaż</styled.CarouselItemLabel>
                  <styled.CarouselItemImage>
                    <Img fluid={image.childImageSharp.fluid} />
                  </styled.CarouselItemImage>
                  <styled.CarouselItemHeading>Segment Bliźniaka w Choszcznie</styled.CarouselItemHeading>
                  <styled.CarouselItemDate>2019</styled.CarouselItemDate>
                </div>
              </div>
              <div className='grid-noBottom col-12'>
                <div className='col-7 xs-hidden'>
                  <styled.CarouselItemHeadingBig>Wolnostojący Dom w Węgorzynie</styled.CarouselItemHeadingBig>
                  <styled.CarouselItemDate>2019</styled.CarouselItemDate>
                </div>
                <div className='col-4_xs-10' data-push-left='off-1'>
                  <Button>Więcej</Button>
                </div>
              </div>
            </div>
          </styled.CarouselItem>
        ))}
      </CarouselPlugin>
      <styled.CarouselDots>
        {slide.map((_, index) => (
          <styled.CarouselDot
            key={index}
            onClick={() => goTo(index)}
            isCurrent={selectedItem === index}
          />
        ))}
      </styled.CarouselDots>
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
