import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'

import settings from './settings'
import * as styled from './styled'

const Carousel = ({
  slide,
  selectedItem, onChange, goTo
}) => (
  <styled.Carousel>
    <CarouselPlugin
      selectedItem={selectedItem}
      onChange={onChange}
      {...settings}
    >
      {[].map(({ image }, index) => (
        <Img key={index} fluid={image.childImageSharp.fluid} />
      ))}
    </CarouselPlugin>
    <styled.CarouselDots>
      {[].map((_, index) => (
        <styled.CarouselDot
          key={index}
          onClick={() => goTo(index)}
          isCurrent={selectedItem === index}
        />
      ))}
    </styled.CarouselDots>
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
