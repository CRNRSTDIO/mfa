import typeToReducer from 'type-to-reducer'
import {
  SHARED_CAROUSEL_SET_ITEM,
  SHARED_CAROUSEL_PREV,
  SHARED_CAROUSEL_NEXT,
  SHARED_CAROUSEL_GOTO
} from '../../../actions/shared/Carousel'

const initialValue = {
  selectedItem: 0
}

export default typeToReducer({
  [SHARED_CAROUSEL_SET_ITEM]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [SHARED_CAROUSEL_PREV]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [SHARED_CAROUSEL_NEXT]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [SHARED_CAROUSEL_GOTO]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  })
}, initialValue)
