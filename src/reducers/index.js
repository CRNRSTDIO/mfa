import { combineReducers } from 'redux'
import homepageCarouselReducer from './homepage/Carousel'
import sharedCarouselReducer from './shared/Carousel'

export default combineReducers({
  homepageCarousel: homepageCarouselReducer,
  sharedCarousel: sharedCarouselReducer
})
