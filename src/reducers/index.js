import { combineReducers } from 'redux'
import homepageCarouselReducer from './homepage/Carousel'
import sharedCarouselReducer from './shared/Carousel'
import sharedCarouselCenterReducer from './shared/CarouselCenter'
import offerCarouselReducer from './offer/Carousel'
import constrCarouselReducer from './construction/Carousel'
import thumbsCarouselReducer from './offer/CarouselThumbs'
import vertCarouselReducer from './homepage/CarouselVert'

export default combineReducers({
  homepageCarousel: homepageCarouselReducer,
  sharedCarousel: sharedCarouselReducer,
  sharedCarouselCenter: sharedCarouselCenterReducer,
  offerCarousel: offerCarouselReducer,
  constrCarousel: constrCarouselReducer,
  thumbsCarousel: thumbsCarouselReducer,
  vertCarousel: vertCarouselReducer
})
