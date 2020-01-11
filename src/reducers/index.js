import { combineReducers } from 'redux'
import selectReducer from './offer/Select'

export default combineReducers({
  selectOffers: selectReducer
})
