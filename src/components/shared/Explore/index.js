import React from 'react'
import PropTypes from 'prop-types'
import Label from '../Label'

import * as styled from './styled'

const Explore = ({ edges: pages }) => (
  <styled.Explore>
    <div className='container'>
      <div className='grid-noBottom-middle'>
        <div className='col-12'>
          <Label>NASZA OFERTA</Label>
        </div>
        <div className='col-4_xs-8' data-push-left='off-2_xs-0'>
          <styled.ExploreHeading>Przeglądaj z kategorii</styled.ExploreHeading>
        </div>
        <div className='col-4_xs-12' data-push-left='off-2_xs-0'>
          <styled.ExploreLinks>
            {pages.map(({ node: { fields: { slug } } }, key) => (
              <styled.ExploreLinkWrapper key={key}>
                <styled.ExploreLink to={slug}>{slug}</styled.ExploreLink>
              </styled.ExploreLinkWrapper>
            ))}
          </styled.ExploreLinks>
        </div>
      </div>
    </div>
  </styled.Explore>
)

Explore.propTypes = {
  edges: PropTypes.array.isRequired
}

export default Explore
