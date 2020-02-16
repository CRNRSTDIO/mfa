import typeToReducer from 'type-to-reducer'
import { SELECT_ALL, SELECT_TO_SELL } from '../../../actions/offer/Select'

const initVal = {
  selectedOption: 1
}

export default typeToReducer({
  [SELECT_ALL]: () => ({
    selectedOption: 1
  }),
  [SELECT_TO_SELL]: () => ({
    selectedOption: 0
  })
}, initVal)
