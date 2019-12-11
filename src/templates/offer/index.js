import React from 'react'

import { Select, Listing } from '../../containers/offer'
import { Heading } from '../../components/offer'
import Layout from '../../components/layout'

import * as styled from '../../styled/offer'

export default ({
  offer_section_0: section00
}) => (
  <Layout>
    <styled.OfferSection00>
      <div className='container'>
        <Heading>{section00.heading}</Heading>
      </div>
    </styled.OfferSection00>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-2_xs-12'>
          <Select />
        </div>
        <Listing />
      </div>
    </div>
  </Layout>
)
