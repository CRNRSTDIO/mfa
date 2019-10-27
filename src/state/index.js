import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default ({ element }) => <Provider store={store}>{element}</Provider>
