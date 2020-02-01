import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = ({
  title,
  descr
}) => (
  <Helmet
    htmlAttributes={{
      lang: 'pl'
    }}
    title={title}
    meta={[
      {
        name: 'description',
        content: descr
      },
      {
        name: 'og:title',
        content: title
      },
      {
        name: 'og:description',
        content: descr
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: descr
      }
    ]}
  />
)

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired
}

export default SEO
