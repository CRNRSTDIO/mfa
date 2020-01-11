import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CarouselPlugin from 'embla-carousel-react'

import { background } from './settings'
import * as styled from './styled'

const Carousel = ({
  slide
}) => {
  const [carousel, setCarousel] = useState(null)

  const [currIndex, setCurrIndex] = useState(0)

  const [, setScrollSnaps] = useState([])

  const scrollTo = index => carousel.scrollTo(index)
  const scrollPrev = () => carousel.scrollPrev()
  const scrollNext = () => carousel.scrollNext()

  useEffect(() => {
    const onSelect = () => {
      setCurrIndex(carousel.selectedScrollSnap())
    }
    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList())
      carousel.on('select', onSelect)
      onSelect()
    }

    return () => carousel && carousel.destroy()
  }, [carousel])

  return (
    <styled.Carousel>
      <CarouselPlugin emblaRef={setCarousel}>
        <styled.CarouselContainer>
          {slide.map(({
            heading,
            subheading,
            tags,
            image: {
              childImageSharp: {
                fluid
              }
            },
            alt
          }, key) => (
            <styled.CarouselItem key={key}>
              <styled.CarouselItemBackgroundImage
                fluid={fluid}
                alt={alt}
                {...background}
              />
              <div className='container'>
                <styled.CarouselItemText>
                  <styled.CarouselControls>
                    <styled.CarouselArrowLeft onClick={scrollPrev} />
                    <styled.CarouselArrowRight onClick={scrollNext} />
                  </styled.CarouselControls>
                  <styled.CarouselItemHeading>{heading}</styled.CarouselItemHeading>
                  <styled.CarouselItemSubheading>{subheading}</styled.CarouselItemSubheading>
                  <styled.CarouselItemTags>
                    {tags.map(({ tag }, key) => (
                      <styled.CarouselItemTag key={key}>{tag}</styled.CarouselItemTag>
                    ))}
                  </styled.CarouselItemTags>
                </styled.CarouselItemText>
              </div>
            </styled.CarouselItem>
          ))}
        </styled.CarouselContainer>
      </CarouselPlugin>
      <div className='container'>
        <styled.CarouselDots>
          <styled.CarouselDot onClick={() => scrollTo(0)} isCurrent={currIndex === 0}>01</styled.CarouselDot>
          <styled.CarouselDot onClick={() => scrollTo(1)} isCurrent={currIndex === 1}>02</styled.CarouselDot>
          <styled.CarouselDot onClick={() => scrollTo(2)} isCurrent={currIndex === 2}>03</styled.CarouselDot>
        </styled.CarouselDots>
      </div>
    </styled.Carousel>
  )
}

Carousel.propTypes = {
  slide: PropTypes.array.isRequired
}

export default Carousel
