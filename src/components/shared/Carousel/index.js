import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import CarouselPlugin from 'embla-carousel-react'
import Button from '../Button'

import * as styled from './styled'

const Carousel = ({
  edges: items = []
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
      <styled.CarouselTabs>
        <div className='container'>
          <div className='grid-noBottom'>
            <div className='col grid-noBottom' data-push-left='off-1_xs-0'>
              {items && items.map(({ node: { frontmatter: { metadata: { metadata_standard: { title } } } } }, index) => (
                <div key={title} className='col-1_xs-4' data-push-left='off-1_xs-0'>
                  <styled.CarouselTab
                    onClick={() => scrollTo(index)}
                    isCurrent={currIndex === index}
                  >
                    {title}
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
            {items ? items.map(({ node: { fields: { slug }, frontmatter: { metadata: { metadata_standard: { alt, heading, text, image: { childImageSharp: { fluid } } } } } } }, index) => (
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
                        <Button as={Link} to={slug}>Więcej</Button>
                      </styled.CarouselItemText>
                    </div>
                  </div>
                </div>
              </styled.CarouselItem>
            )) : []}
          </styled.CarouselContainer>
        </CarouselPlugin>
      </styled.CarouselItems>
    </styled.Carousel>
  )
}

Carousel.propTypes = {
  edges: PropTypes.array.isRequired
}

export default Carousel
