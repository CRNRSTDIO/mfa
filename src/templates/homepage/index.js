import React from 'react'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax'

import HomepageCarouselVert from '../../components/homepage/CarouselVert/query'
import HomepageCarouselTabs from '../../components/homepage/CarouselTabs/query'
import {
  Body,
  Heading as HomepageHeading,
  Carousel as HomepageCarousel
} from '../../components/homepage'
import { Heading, Label, Explore } from '../../components/shared'
import Layout from '../../components/layout'

import * as styled from '../../styled/homepage'

export default ({
  homepage_section_0: section00,
  homepage_section_1: section01,
  homepage_section_2: section02,
  homepage_section_3: section03
}) => (
  <Layout>
    <HomepageCarousel {...section00} />
    <styled.HomepageSection01>
      <div className='container'>
        <Parallax>
          <Label>{section01.label}</Label>
        </Parallax>
        <Heading>{section01.heading}</Heading>
        <Body note={section01.aside}>{section01.text}</Body>
      </div>
    </styled.HomepageSection01>
    <Explore />
    <HomepageCarouselVert />
    <styled.HomepageSection02>
      <div className='container'>
        <Label>{section02.label}</Label>
        <Heading>{section02.heading}</Heading>
        <Body>{section02.text}</Body>
      </div>
    </styled.HomepageSection02>
    <HomepageCarouselTabs />
    <styled.HomepageSection03>
      <HomepageHeading>{section03.heading}</HomepageHeading>
      <Img fluid={section03.image.childImageSharp.fluid} />
    </styled.HomepageSection03>
  </Layout>
)
