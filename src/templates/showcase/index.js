import React from 'react'
import Img from 'gatsby-image'

import {
  Landing,
  Carousel,
  Landscape,
  Blueprints,
  CarouselTabs,
  CarouselThumbs,
  CallToAction
} from '../../components/showcase'
import { Explore } from '../../components/shared'
import Layout from '../../components/layout'

export default ({
  showcase_gallery_top: galleryTop,
  showcase_gallery_bottom: galleryBottom,
  showcase_section_building: sectionBuilding,
  showcase_section_contact: sectionContact,
  showcase_section_descr: sectionDescr,
  showcase_section_image: sectionImage0,
  showcase_section_image_2: sectionImage1,
  showcase_section_landscape: sectionLandscape,
  showcase_section_materials_used: sectionMaterials,
  showcase_section_tech_used: sectionTech,
  ...data
}) => (
  <Layout>
    <Landing {...data}>
      <Carousel {...galleryTop} />
    </Landing>
    <Img fluid={sectionImage0.image.childImageSharp.fluid} />
    <Landscape {...sectionLandscape} />
    <Blueprints {...sectionBuilding} />
    <Img fluid={sectionImage1.image.childImageSharp.fluid} />
    <CarouselTabs {...sectionTech} />
    <CarouselThumbs {...galleryBottom} />
    <CallToAction {...sectionContact} />
    <Explore />
  </Layout>
)
