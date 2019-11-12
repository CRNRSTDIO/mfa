import typeToReducer from 'type-to-reducer'
import {
  CONSTR_CAROUSEL_SET_ITEM,
  CONSTR_CAROUSEL_PREV,
  CONSTR_CAROUSEL_NEXT,
  CONSTR_CAROUSEL_GOTO
} from '../../../actions/construction/Carousel'

const initialValue = {
  selectedItem: 0
}

export default typeToReducer({
  [CONSTR_CAROUSEL_SET_ITEM]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [CONSTR_CAROUSEL_PREV]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [CONSTR_CAROUSEL_NEXT]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  }),
  [CONSTR_CAROUSEL_GOTO]: (state, { payload: { selectedItem } }) => ({
    ...state,
    selectedItem
  })
}, initialValue)
