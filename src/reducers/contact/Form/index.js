import typeToReducer from 'type-to-reducer'
import { CONTACT_SUBMISSION } from '../../../actions/contact/Form'

const initVal = {
  isPending: false,
  success: false
}

export default typeToReducer({
  [CONTACT_SUBMISSION]: {
    PENDING: () => ({
      isPending: true,
      success: false
    }),
    SUCCESS: () => ({
      isPending: false,
      success: true
    }),
    CLEAR: () => initVal
  }
}, initVal)
