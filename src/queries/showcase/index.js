import React from 'react'
import { graphql } from 'gatsby'
import Template from '../../templates/showcase'

export default ({ data: { markdownRemark: { frontmatter } } }) => <Template {...frontmatter} />

export const query = graphql`
  query ShowcaseById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        seo {
          title,
          descr
        }
        showcase_isSold
        showcase_label
        showcase_gallery_bottom {
          slides {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        showcase_gallery_top {
          slides {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        showcase_main_image {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        showcase_section_building {
          blueprints {
            blueprint {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              legend
            }
          }
          heading
          text
        }
        showcase_section_contact {
          contact {
            details {
              data
              heading
            }
            heading
          }
          heading
          price
          price_new
        }
        showcase_section_descr {
          heading
          text
        }
        showcase_section_image {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        showcase_section_image_2 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        showcase_section_landscape {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          legend_items {
            item
          }
          text
        }
        showcase_section_materials_used {
          isEnabled
          heading
          text,
          logos {
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        showcase_section_tech_used {
          isEnabled
          heading
          slides {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
        }
        showcase_tags {
          tag
        }
        showcase_title
        showcase_year
      }
    }
  }
`
