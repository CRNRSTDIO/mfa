import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CarouselPlugin from 'embla-carousel-react'

import * as styled from './styled'

const Carousel = ({
  slides = []
}) => {
  const [carousel, setCarousel] = useState(null)

  const [currIndex, setCurrIndex] = useState(0)

  const [, setScrollSnaps] = useState([])

  const scrollTo = index => carousel.scrollTo(index)

  useEffect(() => {
    const onSelect = () => {
      setCurrIndex(carousel.selectedScrollSnap())
    }
    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList())
      carousel.on('select', onSelect)
      onSelect()
    }

    // return () => carousel && carousel.destroy()
  }, [carousel])

  return (
    <styled.Carousel>
      <CarouselPlugin
        emblaRef={setCarousel}
      >
        <styled.CarouselContainer>
          {slides ? slides.map(({ alt, image: { childImageSharp: { fluid } } }, index) => (
            <styled.CarouselItem key={index}>
              <styled.CarouselImage
                fluid={fluid}
                alt={alt}
                style={{ position: 'absolute' }}
              />
            </styled.CarouselItem>
          )) : []}
        </styled.CarouselContainer>
      </CarouselPlugin>
      <styled.CarouselDots>
        {slides && slides.map((_, index) => (
          <styled.CarouselDot
            key={index}
            onClick={() => scrollTo(index)}
            isCurrent={currIndex === index}
          />
        ))}
      </styled.CarouselDots>
    </styled.Carousel>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired
}

export default Carousel
