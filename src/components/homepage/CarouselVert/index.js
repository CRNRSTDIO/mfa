import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import CarouselPlugin from 'embla-carousel-react'
import { Button } from '../../shared/'

import * as styled from './styled'

const Carousel = ({
  chunkedEdges = []
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
          {chunkedEdges && chunkedEdges.map((edges, index) => (
            <styled.CarouselItem key={index}>
              <div className='container'>
                <div className='grid-noBottom'>
                  <div className='grid-noBottom-middle col-12'>
                    <div className='col-7_xs-10' data-push-left='off-0_xs-1'>
                      <div className='grid-noBottom'>
                        <div className='col-12'>
                          <styled.CarouselItemLabelBig>Domy na sprzedaż</styled.CarouselItemLabelBig>
                        </div>
                      </div>
                      <styled.CarouselItemImageBig as={Link} to={edges[0] && edges[0].node.fields.slug}>
                        {edges[0] && edges[0].node.frontmatter.showcase_isSold && (
                          <styled.CarouselItemSoldTag>
                            Sprzedane
                          </styled.CarouselItemSoldTag>
                        )}
                        <Img fluid={edges[0] && edges[0].node.frontmatter.showcase_main_image.image.childImageSharp.fluid} />
                        <styled.CarouselHoverState>
                          {edges[0] && edges[0].node.frontmatter.showcase_tags.map(({ tag }, index) => (
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
                      </styled.CarouselItemImageBig>
                    </div>
                    <div className='col-4_xs-10 xs-hidden' data-push-left='off-1'>
                      <styled.CarouselItemLabel>Domy na sprzedaż</styled.CarouselItemLabel>
                      <styled.CarouselItemImage as={Link} to={edges[1] && edges[1].node.fields.slug}>
                        {edges[1] && edges[1].node.frontmatter.showcase_isSold && (
                          <styled.CarouselItemSoldTag>
                            Sprzedane
                          </styled.CarouselItemSoldTag>
                        )}
                        <Img fluid={edges[1] && edges[1].node.frontmatter.showcase_main_image.image.childImageSharp.fluid} />
                        <styled.CarouselHoverState>
                          {edges[1] && edges[1].node.frontmatter.showcase_tags.map(({ tag }, index) => (
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
                      </styled.CarouselItemImage>
                      <styled.CarouselItemHeading>{edges[1] && edges[1].node.frontmatter.showcase_title}</styled.CarouselItemHeading>
                      <styled.CarouselItemDate>{edges[1] && edges[1].node.frontmatter.showcase_year}</styled.CarouselItemDate>
                    </div>
                  </div>
                  <div className='grid-noBottom col-12'>
                    <div className='col-7_xs-10' data-push-left='off-0_xs-1'>
                      <styled.CarouselItemHeadingBig>{edges[0] && edges[0].node.frontmatter.showcase_title}</styled.CarouselItemHeadingBig>
                      <styled.CarouselItemDate>{edges[0] && edges[0].node.frontmatter.showcase_year}</styled.CarouselItemDate>
                    </div>
                    <div className='col-4_xs-10' data-push-left='off-1'>
                      <Button as={Link} to='/oferta'>Więcej</Button>
                    </div>
                  </div>
                </div>
              </div>
            </styled.CarouselItem>
          ))}
        </styled.CarouselContainer>
      </CarouselPlugin>
      <styled.CarouselDots>
        {chunkedEdges && chunkedEdges.map((_, index) => (
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
  chunkedEdges: PropTypes.array.isRequired
}

export default Carousel
