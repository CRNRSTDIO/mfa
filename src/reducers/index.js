import { combineReducers } from 'redux'
import homepageCarouselReducer from './homepage/Carousel'
import sharedCarouselReducer from './shared/Carousel'
import sharedCarouselCenterReducer from './shared/CarouselCenter'
import projectsCarouselReducer from './projects/Carousel'
import constrCarouselReducer from './projects/Reviews'
import thumbsCarouselReducer from './projects/CarouselThumbs'
import selectReducer from './offer/Select'
import vertCarouselReducer from './homepage/CarouselVert'

export default combineReducers({
  homepageCarousel: homepageCarouselReducer,
  sharedCarousel: sharedCarouselReducer,
  sharedCarouselCenter: sharedCarouselCenterReducer,
  projectsCarousel: projectsCarouselReducer,
  constrCarousel: constrCarouselReducer,
  thumbsCarousel: thumbsCarouselReducer,
  vertCarousel: vertCarouselReducer,
  selectOffers: selectReducer
})
