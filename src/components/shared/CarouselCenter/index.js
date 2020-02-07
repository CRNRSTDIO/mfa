import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import CarouselPlugin from 'embla-carousel-react'

import * as styled from './styled'

const Carousel = ({
  edges: showcases = []
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
                {showcases ? showcases.map(({
                  node: {
                    fields: {
                      slug
                    },
                    frontmatter: {
                      showcase_title: title,
                      showcase_year: year,
                      showcase_tags: tags,
                      showcase_main_image: {
                        alt,
                        image: {
                          childImageSharp: {
                            fluid
                          }
                        }
                      }
                    }
                  }
                }, index) => (
                  <styled.CarouselItem as={Link} to={slug} key={index}>
                    <styled.CarouselItemWrap>
                      <styled.CarouselImg fluid={fluid} alt={alt} />
                      <styled.CarouselHoverState>
                        {tags && tags.map(({ tag }, index) => (
                          <styled.CarouselTagLine key={index}>
                            {tag && tag.split('-').map((tagPart, index) => (
                              <styled.CarouselTagPart key={index}>
                                {tagPart.trim()}
                              </styled.CarouselTagPart>
                            ))}
                          </styled.CarouselTagLine>
                        ))}
                        <styled.CarouselItemLink>
                          Zobacz więcej
                        </styled.CarouselItemLink>
                      </styled.CarouselHoverState>
                    </styled.CarouselItemWrap>
                    <styled.CarouselItemText>
                      <styled.CarouselItemHeading>{title}</styled.CarouselItemHeading>
                      <styled.CarouselItemDate>{year}</styled.CarouselItemDate>
                    </styled.CarouselItemText>
                  </styled.CarouselItem>
                )) : []}
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
                {showcases && showcases.map((_, index) => (
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
