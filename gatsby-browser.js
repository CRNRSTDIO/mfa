/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'gridlex'
import './src/fonts/index.css'
import './src/components/layout.css'

export { default as wrapRootElement } from './src/state'

export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer')
    console.log('IntersectionObserver polyfill loaded')
  }
}
