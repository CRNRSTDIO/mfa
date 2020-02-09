import { connect } from 'react-redux'
import { Process } from '../../../components/projects'
import currentTab from '../../../selectors/projects/Process'
import { setCurrentTab } from '../../../actions/projects/Process'

export default connect(
  currentTab,
  { setCurrentTab }
)(Process)
