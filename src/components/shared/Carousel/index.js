import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Media from 'react-media'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'
import * as styled from './styled'

const Carousel = ({ selectedItem, onChange, prev, next, goTo }) => (
  <styled.Carousel>
    <styled.CarouselTabs>
      <Media
        query='(max-width: 768px)'
        render={() => (
          <CarouselPlugin
            infiniteLoop
            centerMode
            centerSlidePercentage={50}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            selectedItem={selectedItem}
            onChange={onChange}
          >
            <styled.CarouselTab onClick={() => goTo(0)} isCurrent={selectedItem === 0}>Konstrukcja</styled.CarouselTab>
            <styled.CarouselTab onClick={() => goTo(1)} isCurrent={selectedItem === 1}>Wizja</styled.CarouselTab>
            <styled.CarouselTab onClick={() => goTo(2)} isCurrent={selectedItem === 2}>Proces</styled.CarouselTab>
          </CarouselPlugin>
        )}
      />
      <Media
        query='(min-width: 768px)'
        render={() => (
          <>
            <styled.CarouselTab onClick={() => goTo(0)} isCurrent={selectedItem === 0}>Konstrukcja</styled.CarouselTab>
            <styled.CarouselTab onClick={() => goTo(0)} isCurrent={selectedItem === 1}>Wizja</styled.CarouselTab>
            <styled.CarouselTab onClick={() => goTo(0)} isCurrent={selectedItem === 2}>Proces</styled.CarouselTab>
          </>
        )}
      />
    </styled.CarouselTabs>
    <styled.CarouselItems>
      <CarouselPlugin
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={selectedItem}
        onChange={onChange}
      >
        <styled.CarouselItem>
          <styled.CarouselItemImage>
            {}
          </styled.CarouselItemImage>
          <styled.CarouselItemText>
            <styled.CarouselControls>
              <styled.CarouselArrowLeft onClick={prev} />
              <styled.CarouselArrowRight onClick={next} />
            </styled.CarouselControls>
            <styled.CarouselItemHeading>
              Idealna harmonia pomiędzy rodziną, a jej domem i otaczającym go środowiskiem 1
            </styled.CarouselItemHeading>
            <styled.CarouselItemSubheading>
              Throughout the design process, we collaborate with each client to gain an understanding of their unique needs – defining the success of each building.
            </styled.CarouselItemSubheading>
          </styled.CarouselItemText>
        </styled.CarouselItem>
        <styled.CarouselItem>
          <styled.CarouselItemImage>
            {}
          </styled.CarouselItemImage>
          <styled.CarouselItemText>
            <styled.CarouselControls>
              <styled.CarouselArrowLeft onClick={prev} />
              <styled.CarouselArrowRight onClick={next} />
            </styled.CarouselControls>
            <styled.CarouselItemHeading>
              Idealna harmonia pomiędzy rodziną, a jej domem i otaczającym go środowiskiem 2
            </styled.CarouselItemHeading>
            <styled.CarouselItemSubheading>
              Throughout the design process, we collaborate with each client to gain an understanding of their unique needs – defining the success of each building.
            </styled.CarouselItemSubheading>
          </styled.CarouselItemText>
        </styled.CarouselItem>
        <styled.CarouselItem>
          <styled.CarouselItemImage>
            {}
          </styled.CarouselItemImage>
          <styled.CarouselItemText>
            <styled.CarouselControls>
              <styled.CarouselArrowLeft onClick={prev} />
              <styled.CarouselArrowRight onClick={next} />
            </styled.CarouselControls>
            <styled.CarouselItemHeading>
              Idealna harmonia pomiędzy rodziną, a jej domem i otaczającym go środowiskiem 3
            </styled.CarouselItemHeading>
            <styled.CarouselItemSubheading>
              Throughout the design process, we collaborate with each client to gain an understanding of their unique needs – defining the success of each building.
            </styled.CarouselItemSubheading>
          </styled.CarouselItemText>
        </styled.CarouselItem>
      </CarouselPlugin>
    </styled.CarouselItems>
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
