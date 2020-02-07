import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import CarouselPlugin from 'embla-carousel-react'
import { Heading, Button } from '../../shared/'

import * as styled from './styled'

const Reviews = ({
  heading,
  text,
  details = [],
  opinions = []
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
    <styled.Reviews>
      <div className='container'>
        <Heading>{heading}</Heading>
        <styled.ReviewBody>
          <div className='grid-noBottom'>
            <div className='col-3_xs-12' data-push-left='off-2_xs-0'>
              {text}
            </div>
            {details && details.map(({ heading, data }, index) => (
              <div key={index} className='col-1_xs-12' data-push-left='off-1_xs-0'>
                <styled.ReviewDetailsHeading>
                  {heading}
                </styled.ReviewDetailsHeading>
                <styled.ReviewDetailsData>
                  {data}
                </styled.ReviewDetailsData>
              </div>
            ))}
          </div>
        </styled.ReviewBody>
      </div>
      <styled.Carousel>
        <CarouselPlugin emblaRef={setCarousel}>
          <styled.CarouselContainer>
            {opinions ? opinions.map(({
              alt,
              image: {
                childImageSharp: {
                  fluid
                }
              },
              text,
              subtext,
              link
            }, index) => (
              <styled.CarouselItem key={index}>
                <div className='container'>
                  <div className='grid-noBottom'>
                    <div data-push-left='off-2_xs-0' className='col-4_xs-12'>
                      <styled.CarouselItemText>
                        <styled.CarouselItemHeading>{text}</styled.CarouselItemHeading>
                        <styled.CarouselItemSubheading>{subtext}</styled.CarouselItemSubheading>
                        <Button as='a' href={link}>Więcej</Button>
                      </styled.CarouselItemText>
                    </div>
                    <div className='col-5_xs-first_md-last_xs-12'>
                      <Img fluid={fluid} alt={alt} />
                    </div>
                  </div>
                </div>
              </styled.CarouselItem>
            )) : []}
          </styled.CarouselContainer>
        </CarouselPlugin>
        <div className='grid-noBottom-noGutter'>
          <div data-push-left='off-2_xs-0' className='col-9_xs-12'>
            <styled.CarouselControls>
              <styled.CarouselArrowLeft onClick={scrollPrev} />
              <styled.CarouselDots>
                {opinions && opinions.map((_, index) => (
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
      </styled.Carousel>
    </styled.Reviews>
  )
}

Reviews.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  opinions: PropTypes.array.isRequired
}

export default Reviews
