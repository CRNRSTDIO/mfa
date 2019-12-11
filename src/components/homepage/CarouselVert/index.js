import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import CarouselPlugin from 'embla-carousel-react'
import { Button } from '../../shared/'

import * as styled from './styled'

const Carousel = ({
  edges: showcases
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

    return () => carousel && carousel.destroy()
  }, [carousel])

  return (
    <styled.Carousel>
      <CarouselPlugin emblaRef={setCarousel}>
        <styled.CarouselContainer>
          {[...showcases, ...showcases, ...showcases].map(({ node: { frontmatter: { showcase_main_image: { image: { childImageSharp: { fluid } } } } } }, index) => (
            <styled.CarouselItem key={index}>
              <div className='container'>
                <div className='grid-noBottom'>
                  <div className='grid-noBottom-middle col-12'>
                    <div className='col-7 xs-hidden'>
                      <styled.CarouselItemImageBig>
                        <Img fluid={fluid} />
                      </styled.CarouselItemImageBig>
                    </div>
                    <div className='col-4_xs-10' data-push-left='off-1'>
                      <styled.CarouselItemLabel>Domy na sprzedaż</styled.CarouselItemLabel>
                      <styled.CarouselItemImage>
                        <Img fluid={fluid} />
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
              </div>
            </styled.CarouselItem>
          ))}
        </styled.CarouselContainer>
      </CarouselPlugin>
      <styled.CarouselDots>
        {[...showcases, ...showcases, ...showcases].map((_, index) => (
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
  edges: PropTypes.array.isRequired
}

export default Carousel
