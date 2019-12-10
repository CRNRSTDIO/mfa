import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Media from 'react-media'
import { Carousel as CarouselPlugin } from 'react-responsive-carousel'
import Button from '../Button'

import settings from './settings'
import * as styled from './styled'

const Carousel = ({
  edges: items,
  selectedItem, onChange, prev, next, goTo
}) => (
  <styled.Carousel>
    <styled.CarouselTabs>
      <Media
        query='(max-width: 768px)'
        render={() => (
          // <CarouselPlugin
          //   centerMode
          //   centerSlidePercentage={50}
          //   selectedItem={selectedItem}
          //   onChange={onChange}
          //   {...settings}
          // >
            items.map(({ node: { frontmatter: { metadata: { metadata_standard: { title } } } } }, index) => (
              <styled.CarouselTab
                key={title}
                onClick={() => goTo(index)}
                isCurrent={selectedItem === index}
              >
                {title}
              </styled.CarouselTab>
            ))
          // </CarouselPlugin>
        )}
      />
      <Media
        query='(min-width: 768px)'
        render={() => (
          <div className='container'>
            <div className='grid-noBottom'>
              <div className='col grid-noBottom' data-push-left='off-1'>
                {items.map(({ node: { frontmatter: { metadata: { metadata_standard: { title } } } } }, index) => (
                  <div key={title} className='col-1' data-push-left='off-1'>
                    <styled.CarouselTab
                      onClick={() => goTo(index)}
                      isCurrent={selectedItem === index}
                    >
                      {title}
                    </styled.CarouselTab>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      />
    </styled.CarouselTabs>
    <styled.CarouselItems>
      {/* <CarouselPlugin
        selectedItem={selectedItem}
        onChange={onChange}
        {...settings}
      > */}
        {items.map(({ node: { fields: { slug }, frontmatter: { metadata: { metadata_standard: { alt, heading, text, image: { childImageSharp: { fluid } } } } } } }, index) => (
          <styled.CarouselItem key={index}>
            <styled.CarouselItemImage>
              <Img fluid={fluid} alt={alt} />
            </styled.CarouselItemImage>
            <div className='container'>
              <div className='grid-noBottom'>
                <div className='col-6_xs-12' data-push-left='off-6_xs-0'>
                  <styled.CarouselItemText>
                    <styled.CarouselControls>
                      <styled.CarouselArrowLeft onClick={prev} />
                      <styled.CarouselArrowRight onClick={next} />
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
        ))}
      {/* </CarouselPlugin> */}
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
