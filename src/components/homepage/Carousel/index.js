import React from 'react'
import PropTypes from 'prop-types'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'

import settings, { background } from './settings'
import * as styled from './styled'

const Carousel = ({
  slide,
  selectedItem,
  onChange,
  prev,
  next,
  goTo
}) => (
  <styled.Carousel>
    <CarouselPlugin
      onChange={onChange}
      selectedItem={selectedItem}
      {...settings}
    >
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
            {...background}
          />
          <styled.CarouselItemText>
            <styled.CarouselControls>
              <styled.CarouselArrowLeft onClick={prev} />
              <styled.CarouselArrowRight onClick={next} />
            </styled.CarouselControls>
            <styled.CarouselItemHeading>{heading}</styled.CarouselItemHeading>
            <styled.CarouselItemSubheading>{subheading}</styled.CarouselItemSubheading>
            <styled.CarouselItemTags>
              {tags.map(({ tag }, key) => (
                <styled.CarouselItemTag key={key}>{tag}</styled.CarouselItemTag>
              ))}
            </styled.CarouselItemTags>
          </styled.CarouselItemText>
        </styled.CarouselItem>
      ))}
    </CarouselPlugin>
    <styled.CarouselDots>
      <styled.CarouselDot onClick={() => goTo(0)} isCurrent={selectedItem === 0}>01</styled.CarouselDot>
      <styled.CarouselDot onClick={() => goTo(1)} isCurrent={selectedItem === 1}>02</styled.CarouselDot>
      <styled.CarouselDot onClick={() => goTo(2)} isCurrent={selectedItem === 2}>03</styled.CarouselDot>
    </styled.CarouselDots>
  </styled.Carousel>
)

Carousel.propTypes = {
  slide: PropTypes.array.isRequired,
  selectedItem: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired
}

export default Carousel
