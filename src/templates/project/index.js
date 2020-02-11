import React from 'react'
import Img from 'gatsby-image'

import {
  Landing,
  Carousel,
  Landscape,
  Blueprints,
  CarouselTabs,
  CarouselThumbs,
  Materials
} from '../../components/showcase'
import { CallToAction } from '../../containers/showcase'
import { CarouselCenter } from '../../components/project'
import { Description } from '../../components/shared'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'

export default ({
  seo,
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
    <SEO {...seo} />
    <Landing {...data}>
      <Carousel {...galleryTop} />
    </Landing>
    <Description {...sectionDescr} />
    <Img fluid={sectionImage0.image.childImageSharp.fluid} />
    <Landscape {...sectionLandscape} />
    <Blueprints {...sectionBuilding} />
    <Materials {...sectionMaterials} />
    <Img fluid={sectionImage1.image.childImageSharp.fluid} />
    <CarouselTabs {...sectionTech} />
    <CarouselThumbs {...galleryBottom} />
    <CallToAction {...sectionContact} />
    <CarouselCenter />
  </Layout>
)
