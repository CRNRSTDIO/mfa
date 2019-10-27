import typeToReducer from 'type-to-reducer'
import {
  HOMEPAGE_CAROUSEL_SET_ITEM,
  HOMEPAGE_CAROUSEL_PREV,
  HOMEPAGE_CAROUSEL_NEXT,
  HOMEPAGE_CAROUSEL_GOTO
} from '../../../actions/homepage/Carousel'

const initialValue = {
  selectedItem: 0
}

export default typeToReducer({
  [HOMEPAGE_CAROUSEL_SET_ITEM]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [HOMEPAGE_CAROUSEL_PREV]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [HOMEPAGE_CAROUSEL_NEXT]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [HOMEPAGE_CAROUSEL_GOTO]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  })
}, initialValue)
