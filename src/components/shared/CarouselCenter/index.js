import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import CarouselPlugin from 'embla-carousel-react'

import * as styled from './styled'

const Carousel = ({
  edges: showcases
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
      <div className='container'>
        <div className='grid-noBottom'>
          <div className='col-9_xs-12' data-push-left='off-2_xs-0'>
            <CarouselPlugin emblaRef={setCarousel} className='wrap'>
              <styled.CarouselContainer>
                {[...showcases, ...showcases, ...showcases, ...showcases].map(({ node: { frontmatter: { showcase_title: title, showcase_year: year, showcase_main_image: { alt, image: { childImageSharp: { fluid } } } } } }, index) => (
                  <styled.CarouselItem key={index}>
                    <Img fluid={fluid} alt={alt} />
                    <styled.CarouselItemText>
                      <styled.CarouselItemHeading>{title}</styled.CarouselItemHeading>
                      <styled.CarouselItemDate>{year}</styled.CarouselItemDate>
                    </styled.CarouselItemText>
                  </styled.CarouselItem>
                ))}
              </styled.CarouselContainer>
            </CarouselPlugin>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='grid-noBottom'>
          <div className='col-9_xs-12' data-push-left='off-2_xs-0'>
            <styled.CarouselControls>
              <styled.CarouselArrowLeft onClick={scrollPrev} />
              <styled.CarouselDots>
                {[...showcases, ...showcases, ...showcases, ...showcases].map((_, index) => (
                  <styled.CarouselDot
                    key={index}
                    onClick={() => scrollTo(index)}
                    isCurrent={currIndex === index}
                  />
                ))}
              </styled.CarouselDots>
              <styled.CarouselArrowRight onClick={scrollNext} />
            </styled.CarouselControls>
          </div>
        </div>
      </div>
    </styled.Carousel>
  )
}

Carousel.propTypes = {
  edges: PropTypes.array.isRequired
}

export default Carousel
