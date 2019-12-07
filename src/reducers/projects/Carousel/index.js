import typeToReducer from 'type-to-reducer'
import {
  OFFER_CAROUSEL_SET_ITEM,
  OFFER_CAROUSEL_PREV,
  OFFER_CAROUSEL_NEXT,
  OFFER_CAROUSEL_GOTO
} from '../../../actions/projects/Carousel'

const initVal = {
  selectedItem: 0
}

export default typeToReducer({
  [OFFER_CAROUSEL_SET_ITEM]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [OFFER_CAROUSEL_PREV]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [OFFER_CAROUSEL_NEXT]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [OFFER_CAROUSEL_GOTO]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  })
}, initVal)
