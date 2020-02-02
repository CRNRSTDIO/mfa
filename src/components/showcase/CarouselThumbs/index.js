import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import CarouselPlugin from 'embla-carousel-react'

import options from './settings'
import * as styled from './styled'

const Carousel = ({
  slides
}) => {
  const [carousel, setCarousel] = useState(null)
  const [thumbs, setThumbs] = useState(null)

  const [currIndex, setCurrIndex] = useState(0)

  const [, setScrollSnaps] = useState([])

  const scrollTo = index => carousel.scrollTo(index)
  const thumbsTo = index => thumbs.scrollTo(index)

  const scrollPrev = () => {
    carousel.scrollPrev()
    thumbs.scrollPrev()
  }
  const scrollNext = () => {
    carousel.scrollNext()
    thumbs.scrollNext()
  }

  const goTo = index => {
    scrollTo(index)
    thumbsTo(index)
  }

  useEffect(() => {
    const onSelect = () => {
      setCurrIndex(carousel.selectedScrollSnap())
      setCurrIndex(thumbs.selectedScrollSnap())
    }

    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList())
      carousel.on('select', onSelect)
      onSelect()
    }

    if (thumbs) {
      setScrollSnaps(thumbs.scrollSnapList())
      thumbs.on('select', onSelect)
      onSelect()
    }

    return () => {
      carousel && carousel.destroy()
      thumbs && thumbs.destroy()
    }
  }, [carousel, thumbs])

  return (
    <div className='container'>
      <styled.Carousel>
        <styled.CarouselItems>
          <styled.CarouselArrowLeft onClick={scrollPrev} />
          <CarouselPlugin
            emblaRef={setCarousel}
            options={options}
          >
            <styled.CarouselContainer>
              {slides.map(({ image }, index) => (
                <styled.CarouselItem key={index}>
                  <Img fluid={image.childImageSharp.fluid} />
                </styled.CarouselItem>
              ))}
            </styled.CarouselContainer>
          </CarouselPlugin>
          <styled.CarouselCounter>
            <styled.CarouselCounterIcon />
            <styled.CarouselCounterText>
              {currIndex + 1} z {slides.length}
            </styled.CarouselCounterText>
          </styled.CarouselCounter>
          <styled.CarouselArrowRight onClick={scrollNext} />
        </styled.CarouselItems>
        <styled.CarouselThumbs>
          <CarouselPlugin
            emblaRef={setThumbs}
            options={options}
          >
            <styled.CarouselContainer>
              {slides.map(({ image }, index) => (
                <styled.CarouselThumb key={index} onClick={() => goTo(index)}>
                  <Img fluid={image.childImageSharp.fluid} />
                </styled.CarouselThumb>
              ))}
            </styled.CarouselContainer>
          </CarouselPlugin>
        </styled.CarouselThumbs>
      </styled.Carousel>
    </div>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array
}

export default Carousel
