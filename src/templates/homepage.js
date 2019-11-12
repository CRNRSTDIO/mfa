import React from 'react'
import { graphql } from 'gatsby'
import {
  Carousel as HomepageCarousel,
  CarouselVert as HomepageCarouselVert
} from '../containers/homepage'
import {
  Carousel as SharedCarousel,
  CarouselCenter as SharedCarouselCenter
} from '../containers/shared'
import {
  Carousel as OfferCarousel,
  CarouselThumbs as OfferCarouselThumbs
} from '../containers/offer'
import { Carousel as ConstrCarousel } from '../containers/construction'
import { Body } from '../components/homepage'
import { Heading, Label } from '../components/shared'

export const HomepageTemplate = ({ homepage_section_2 }) => (
  <>
    <div className='container'>
      <Label>Label</Label>
      <Heading>Heading</Heading>
      <Body
        note='asd'
      >
        asd
      </Body>
    </div>
    <HomepageCarousel />
    <SharedCarousel {...homepage_section_2} />
    <OfferCarousel {...homepage_section_2} />
    <SharedCarouselCenter {...homepage_section_2} />
    <ConstrCarousel {...homepage_section_2} />
    <OfferCarouselThumbs {...homepage_section_2} />
    <HomepageCarouselVert {...homepage_section_2} />
  </>
)

export default ({ data: { markdownRemark: { frontmatter } } }) => <HomepageTemplate {...frontmatter} />

export const homepageQuery = graphql`
  query Homepage {
    markdownRemark(frontmatter: { template: { eq: "homepage" } }) {
      frontmatter {
        template
        homepage_section_2 {
          slide {
            label
            image {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            subheading
          }
        }
      }
    }
  }
`
