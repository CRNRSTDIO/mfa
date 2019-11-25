import React from 'react'
import {
  Carousel as HomepageCarousel
} from '../../containers/homepage'
import HomepageCarouselVert from '../../components/homepage/CarouselVert/query'
import {
  Carousel as SharedCarousel,
  CarouselCenter as SharedCarouselCenter
} from '../../containers/shared'
import {
  Carousel as OfferCarousel,
  CarouselThumbs as OfferCarouselThumbs
} from '../../containers/offer'
import { Carousel as ConstrCarousel } from '../../containers/construction'
import Explore from '../../components/shared/Explore/query'
import { Body } from '../../components/homepage'
import { Heading, Label } from '../../components/shared'
import * as styled from '../../styled/homepage'

export default ({
  homepage_section_0: section00,
  homepage_section_1: section01,
  homepage_section_2: section02,
  homepage_section_3: section03
}) => (
  <>
    <HomepageCarousel {...section00} />
    <styled.HomepageSection01>
      <div className='container'>
        <Label>{section01.label}</Label>
        <Heading>{section01.heading}</Heading>
        <Body note={section01.aside}>{section01.text}</Body>
      </div>
    </styled.HomepageSection01>
    <Explore />
    <HomepageCarouselVert />
    {/* <div className='container'>
      <Label>Label</Label>
      <Heading>Heading</Heading>
      <Body
        note='asd'
      >
        asd
      </Body>
    </div>
    <HomepageCarousel />
    <SharedCarousel />
    <OfferCarousel />
    <SharedCarouselCenter />
    <ConstrCarousel />
    <OfferCarouselThumbs />
    <HomepageCarouselVert /> */}
  </>
)
