import typeToReducer from 'type-to-reducer'
import {
  VERT_CAROUSEL_SET_ITEM,
  VERT_CAROUSEL_PREV,
  VERT_CAROUSEL_NEXT,
  VERT_CAROUSEL_GOTO
} from '../../../actions/homepage/CarouselVert'

const initialValue = {
  selectedItem: 0
}

export default typeToReducer({
  [VERT_CAROUSEL_SET_ITEM]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [VERT_CAROUSEL_PREV]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [VERT_CAROUSEL_NEXT]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [VERT_CAROUSEL_GOTO]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  })
}, initialValue)
