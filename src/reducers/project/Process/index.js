import typeToReducer from 'type-to-reducer'
import { PROCESS_SET_CURRENT_TAB } from '../../../actions/projects/Process'

const initVal = ''

export default typeToReducer({
  [PROCESS_SET_CURRENT_TAB]: (state, { payload: { tab } }) => ({
    ...state,
    tab
  })
}, initVal)
