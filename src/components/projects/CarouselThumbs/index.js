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
    <styled.Carousel>
      <styled.CarouselItems>
        <styled.CarouselArrowLeft onClick={prev} />
        <CarouselPlugin
          selectedItem={selectedItem}
          onChange={onChange}
          {...settings}
        >
          {[...slide, ...slide].map(({ image }, index) => (
            <styled.CarouselItem key={index}>
              <Img fluid={image.childImageSharp.fluid} />
            </styled.CarouselItem>
          ))}
        </CarouselPlugin>
        <styled.CarouselCounter>
          <styled.CarouselCounterIcon />
          <styled.CarouselCounterText>
            {selectedItem + 1} z {[...slide, ...slide].length}
          </styled.CarouselCounterText>
        </styled.CarouselCounter>
        <styled.CarouselArrowRight onClick={next} />
      </styled.CarouselItems>
      <styled.CarouselThumbs>
        <CarouselPlugin
          selectedItem={selectedItem}
          onChange={onChange}
          infiniteLoop
          onClickItem={item => goTo(item)}
          width='25%'
          {...settings}
        >
          {[...slide, ...slide].map(({ image }, index) => (
            <styled.CarouselThumb key={index}>
              <Img fluid={image.childImageSharp.fluid} />
            </styled.CarouselThumb>
          ))}
        </CarouselPlugin>
      </styled.CarouselThumbs>
    </styled.Carousel>
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
