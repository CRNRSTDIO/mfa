import { connect } from 'react-redux'
import { Form } from '../../../components/contact'
import { onSubmit } from '../../../actions/contact/Form'

export default connect(
  null,
  { onSubmit }
)(Form)
