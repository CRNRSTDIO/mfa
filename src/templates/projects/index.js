import React from 'react'

import { Heading } from '../../components/shared'
import { Landing, Listing, Process, Standard } from '../../components/projects'
import { Reviews } from '../../containers/projects'

export default ({
  projects_section_0: section0,
  projects_section_1: section1,
  projects_section_2: section2,
  projects_section_3: section3,
  projects_section_4: section4,
  projects_section_5: section5
}) => (
  <>
    <Landing {...section0} contents={section1} />
    <div className='container'>
      <Heading>{section2.heading}</Heading>
    </div>
    <Listing />
    <Process {...section3} />
    <Standard {...section4} />
    <Reviews {...section5} />
  </>
)
