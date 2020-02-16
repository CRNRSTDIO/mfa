import { combineReducers } from 'redux'
import selectReducer from './offer/Select'
import processReducer from './project/Process'
import contactReducer from './contact/Form'

export default combineReducers({
  selectOffers: selectReducer,
  processProject: processReducer,
  contactForm: contactReducer
})
