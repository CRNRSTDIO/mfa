import React from 'react'
import PropTypes from 'prop-types'

import * as styled from './styled'

const Landing = ({
  showcase_label: label,
  showcase_tags: tags,
  showcase_title: title,
  children
}) => (
  <styled.Landing>
    <div className='container'>
      <div className='grid-noBottom'>
        <div className='col-4_xs-12'>
          <styled.LandingLabel>
            {label}
          </styled.LandingLabel>
          <styled.LandingHeading>
            {title}
          </styled.LandingHeading>
          <styled.LandingTags>
            {tags.map(({ tag }, index) => (
              <styled.LadingTagLine key={index}>
                {tag.split('-').map((tagPart, index) => (
                  <styled.LandingTag key={index}>
                    {tagPart.trim()}
                  </styled.LandingTag>
                ))}
              </styled.LadingTagLine>
            ))}
          </styled.LandingTags>
        </div>
      </div>
    </div>
    {children}
  </styled.Landing>
)

Landing.propTypes = {
  children: PropTypes.node.isRequired,
  showcase_label: PropTypes.string.isRequired,
  showcase_tags: PropTypes.array.isRequired,
  showcase_title: PropTypes.string.isRequired
}

export default Landing
