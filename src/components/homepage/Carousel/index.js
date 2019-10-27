import React from 'react'
import PropTypes from 'prop-types'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'
import * as styled from './styled'

const Carousel = ({ selectedItem, onChange, prev, next, goTo }) => (
  <styled.Carousel>
    <CarouselPlugin
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      onChange={onChange}
      infiniteLoop
      selectedItem={selectedItem}
    >
      <styled.CarouselItem>
        <styled.CarouselItemText>
          <styled.CarouselControls>
            <styled.CarouselArrowLeft onClick={prev} />
            <styled.CarouselArrowRight onClick={next} />
          </styled.CarouselControls>
          <styled.CarouselItemHeading>Nowoczesny Dom w Choszcznie 1</styled.CarouselItemHeading>
          <styled.CarouselItemSubheading>Segmnet Bliźniaka</styled.CarouselItemSubheading>
          <styled.CarouselItemTags>
            <styled.CarouselItemTag>Metraż - 180 m2</styled.CarouselItemTag>
            <styled.CarouselItemTag>Cena - 450 000 zł</styled.CarouselItemTag>
          </styled.CarouselItemTags>
        </styled.CarouselItemText>
      </styled.CarouselItem>
      <styled.CarouselItem>
        <styled.CarouselItemText>
          <styled.CarouselControls>
            <styled.CarouselArrowLeft onClick={prev} />
            <styled.CarouselArrowRight onClick={next} />
          </styled.CarouselControls>
          <styled.CarouselItemHeading>Nowoczesny Dom w Choszcznie 2</styled.CarouselItemHeading>
          <styled.CarouselItemSubheading>Segmnet Bliźniaka</styled.CarouselItemSubheading>
          <styled.CarouselItemTags>
            <styled.CarouselItemTag>Metraż - 180 m2</styled.CarouselItemTag>
            <styled.CarouselItemTag>Cena - 450 000 zł</styled.CarouselItemTag>
          </styled.CarouselItemTags>
        </styled.CarouselItemText>
      </styled.CarouselItem>
      <styled.CarouselItem>
        <styled.CarouselItemText>
          <styled.CarouselControls>
            <styled.CarouselArrowLeft onClick={prev} />
            <styled.CarouselArrowRight onClick={next} />
          </styled.CarouselControls>
          <styled.CarouselItemHeading>Nowoczesny Dom w Choszcznie 3</styled.CarouselItemHeading>
          <styled.CarouselItemSubheading>Segmnet Bliźniaka</styled.CarouselItemSubheading>
          <styled.CarouselItemTags>
            <styled.CarouselItemTag>Metraż - 180 m2</styled.CarouselItemTag>
            <styled.CarouselItemTag>Cena - 450 000 zł</styled.CarouselItemTag>
          </styled.CarouselItemTags>
        </styled.CarouselItemText>
      </styled.CarouselItem>
    </CarouselPlugin>
    <styled.CarouselDots>
      <styled.CarouselDot onClick={() => goTo(0)} isCurrent={selectedItem === 0}>01</styled.CarouselDot>
      <styled.CarouselDot onClick={() => goTo(1)} isCurrent={selectedItem === 1}>02</styled.CarouselDot>
      <styled.CarouselDot onClick={() => goTo(2)} isCurrent={selectedItem === 2}>03</styled.CarouselDot>
    </styled.CarouselDots>
  </styled.Carousel>
)

Carousel.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  goTo: PropTypes.func.isRequired
}

export default Carousel
