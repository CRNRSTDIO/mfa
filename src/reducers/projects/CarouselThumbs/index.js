import typeToReducer from 'type-to-reducer'
import {
  THUMBS_CAROUSEL_SET_ITEM,
  THUMBS_CAROUSEL_PREV,
  THUMBS_CAROUSEL_NEXT,
  THUMBS_CAROUSEL_GOTO
} from '../../../actions/projects/CarouselThumbs'

const initVal = {
  selectedItem: 0
}

export default typeToReducer({
  [THUMBS_CAROUSEL_SET_ITEM]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [THUMBS_CAROUSEL_PREV]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [THUMBS_CAROUSEL_NEXT]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [THUMBS_CAROUSEL_GOTO]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  })
}, initVal)
