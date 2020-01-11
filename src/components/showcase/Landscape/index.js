import React from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash.chunk'
import Img from 'gatsby-image'

import { Heading, Body } from '../../shared'
import * as styled from './styled'

const Landscape = ({
  heading,
  text,
  image: {
    childImageSharp: {
      fluid
    }
  },
  alt,
  legend_items: items
}) => (
  <styled.Landscape>
    <div className='container'>
      <Heading>
        {heading}
      </Heading>
      <Body>
        {text}
      </Body>
      <div className='grid-noBottom'>
        <div className='col-10_xs-12' data-push-left='off-1_xs-0'>
          <Img fluid={fluid} alt={alt} />
        </div>
      </div>
      <styled.Legend>
        <div className='grid-noBottom'>
          <div className='col-10_xs-12 grid-noBottom' data-push-left='off-2_xs-0'>
            <div className='col-12'>
              <styled.LegendLabel>
                Legenda
              </styled.LegendLabel>
            </div>
            {chunk(items, 2).map((chunk, index) => (
              <div key={index} className='col-2_xs-12'>
                {chunk.map(({ item }, index) => (
                  <styled.LegendItem key={index}>
                    {item}
                  </styled.LegendItem>
                ))}
              </div>
            ))}
          </div>
        </div>
      </styled.Legend>
    </div>
  </styled.Landscape>
)

Landscape.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Landscape
