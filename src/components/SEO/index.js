import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'

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
  >
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href={`${withPrefix('/')}img/apple-touch-icon.png`}
    />
    <link
      rel='icon'
      type='image/png'
      href={`${withPrefix('/')}img/favicon-32x32.png`}
      sizes='32x32'
    />
    <link
      rel='icon'
      type='image/png'
      href={`${withPrefix('/')}img/favicon-16x16.png`}
      sizes='16x16'
    />
  </Helmet>
)

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired
}

export default SEO
