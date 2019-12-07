import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'

import settings from './settings'
import * as styled from './styled'

const Carousel = ({
  edges: showcases,
  selectedItem, onChange, prev, next, goTo
}) => (
  <div className='container'>
    <div className='grid'>
      <div className='col-9_xs-12' data-push-left='off-2_xs-0'>
        <styled.Carousel>
          <CarouselPlugin
            selectedItem={selectedItem}
            onChange={onChange}
            {...settings}
          >
            {[...showcases, ...showcases, ...showcases, ...showcases].map(({ node: { frontmatter: { showcase_title: title, showcase_year: year, showcase_main_image: { alt, image: { childImageSharp: { fluid } } } } } }, index) => (
              <styled.CarouselItem key={index}>
                <Img fluid={fluid} alt={alt} />
                <styled.CarouselItemText>
                  <styled.CarouselItemHeading>{title}</styled.CarouselItemHeading>
                  <styled.CarouselItemDate>{year}</styled.CarouselItemDate>
                </styled.CarouselItemText>
              </styled.CarouselItem>
            ))}
          </CarouselPlugin>
          <styled.CarouselControls>
            <styled.CarouselArrowLeft onClick={prev} />
            <styled.CarouselDots>
              {[...showcases, ...showcases, ...showcases, ...showcases].map((_, index) => (
                <styled.CarouselDot
                  key={index}
                  onClick={() => goTo(index)}
                  isCurrent={selectedItem === index}
                />
              ))}
            </styled.CarouselDots>
            <styled.CarouselArrowRight onClick={next} />
          </styled.CarouselControls>
        </styled.Carousel>
      </div>
    </div>
  </div>
)

Carousel.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired
}

export default Carousel
