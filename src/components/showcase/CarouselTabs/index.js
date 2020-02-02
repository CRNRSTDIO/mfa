import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Heading } from '../../shared/'
import CarouselPlugin from 'embla-carousel-react'

import * as styled from '../../shared/Carousel/styled'

const Carousel = ({
  heading,
  slides
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
    <>
      <div className='container'>
        <styled.CarouselHeader>
          <Heading>
            {heading}
          </Heading>
        </styled.CarouselHeader>
      </div>
      <styled.Carousel>
        <styled.CarouselTabs>
          <div className='container'>
            <div className='grid-noBottom'>
              <div className='col grid-noBottom' data-push-left='off-1_xs-0'>
                {slides.map(({ heading }, index) => (
                  <div key={index} className='col-1_xs-4' data-push-left='off-1_xs-0'>
                    <styled.CarouselTab
                      onClick={() => scrollTo(index)}
                      isCurrent={currIndex === index}
                    >
                      {heading}
                    </styled.CarouselTab>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </styled.CarouselTabs>
        <styled.CarouselItems>
          <CarouselPlugin
            emblaRef={setCarousel}
          >
            <styled.CarouselContainer>
              {slides.map(({
                alt,
                heading,
                text,
                image: {
                  childImageSharp: {
                    fluid
                  }
                }
              }, index) => (
                <styled.CarouselItem key={index}>
                  <styled.CarouselItemImage>
                    <Img fluid={fluid} alt={alt} />
                  </styled.CarouselItemImage>
                  <div className='container'>
                    <div className='grid-noBottom'>
                      <div className='col-6_xs-12' data-push-left='off-6_xs-0'>
                        <styled.CarouselItemText>
                          <styled.CarouselControls>
                            <styled.CarouselArrowLeft onClick={scrollPrev} />
                            <styled.CarouselArrowRight onClick={scrollNext} />
                          </styled.CarouselControls>
                          <styled.CarouselItemHeading>
                            {heading}
                          </styled.CarouselItemHeading>
                          <styled.CarouselItemSubheading>
                            {text}
                          </styled.CarouselItemSubheading>
                        </styled.CarouselItemText>
                      </div>
                    </div>
                  </div>
                </styled.CarouselItem>
              ))}
            </styled.CarouselContainer>
          </CarouselPlugin>
        </styled.CarouselItems>
      </styled.Carousel>
    </>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired
}

export default Carousel
