import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { Heading, Body } from '../../shared'
import * as styled from './styled'

const Blueprints = ({
  heading,
  text,
  blueprints = []
}) => (
  <styled.Blueprints>
    <div className='container'>
      <Heading>
        {heading}
      </Heading>
      <Body>
        {text}
      </Body>
      <div className='grid-noBottom'>
        <div className='col grid-noBottom' data-push-left='off-2_xs-0'>
          {blueprints && blueprints.map(({
            blueprint: {
              alt,
              image: {
                childImageSharp: {
                  fluid
                }
              },
              legend
            }
          }, index) => (
            <div className={`col-${blueprints.length > 1 ? 6 : 12}_xs-12`} key={index}>
              <Img fluid={fluid} alt={alt} />
              <styled.Legend>
                {legend && legend.split('\n').map((row, index) => (
                  <styled.LegendRow key={index}>
                    {row && row.split('|').map((column, index) => (
                      <styled.LegendColumn key={index}>
                        {column.trim()}
                      </styled.LegendColumn>
                    ))}
                  </styled.LegendRow>
                ))}
              </styled.Legend>
            </div>
          ))}
        </div>
      </div>
    </div>
  </styled.Blueprints>
)

Blueprints.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  blueprints: PropTypes.array.isRequired
}

export default Blueprints
