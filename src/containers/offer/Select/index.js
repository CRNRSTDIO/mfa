import { connect } from 'react-redux'
import { Select } from '../../../components/offer'
import { setSelectToAll, setSelectToSell } from '../../../actions/offer/Select'

const mapStateToProps = ({ selectOffers: { selectedOption } }) => ({
  selectedOption
})

export default connect(
  mapStateToProps,
  { setSelectToAll, setSelectToSell }
)(Select)
