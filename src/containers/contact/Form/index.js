import { connect } from 'react-redux'
import { Form } from '../../../components/contact'
import { clearContactSubmission, onSubmit } from '../../../actions/contact/Form'
import { contactForm } from '../../../selectors/contact/Form'

export default connect(
  contactForm,
  { clearContactSubmission, onSubmit }
)(Form)
