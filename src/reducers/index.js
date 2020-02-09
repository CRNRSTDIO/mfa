import { combineReducers } from 'redux'
import selectReducer from './offer/Select'
import processReducer from './project/Process'

export default combineReducers({
  selectOffers: selectReducer,
  processProject: processReducer
})
