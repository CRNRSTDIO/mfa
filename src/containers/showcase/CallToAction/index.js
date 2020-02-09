import { connect } from 'react-redux'
import { CallToAction } from '../../../components/showcase'
import resolvedValues from '../../../selectors/showcase/CallToAction'

export default connect(
  resolvedValues
)(CallToAction)
