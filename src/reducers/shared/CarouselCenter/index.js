import typeToReducer from 'type-to-reducer'
import {
  SHARED_CAROUSEL_CENTER_SET_ITEM,
  SHARED_CAROUSEL_CENTER_PREV,
  SHARED_CAROUSEL_CENTER_NEXT,
  SHARED_CAROUSEL_CENTER_GOTO
} from '../../../actions/shared/CarouselCenter'

const initialValue = {
  selectedItem: 0
}

export default typeToReducer({
  [SHARED_CAROUSEL_CENTER_SET_ITEM]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [SHARED_CAROUSEL_CENTER_PREV]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [SHARED_CAROUSEL_CENTER_NEXT]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [SHARED_CAROUSEL_CENTER_GOTO]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  })
}, initialValue)
