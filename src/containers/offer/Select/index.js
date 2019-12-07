import { connect } from 'react-redux'
import { Select } from '../../../components/offer'
import { setSelectToAll, setSelectToSell } from '../../../actions/offer/Select'

const mapStateToProps = ({ selectOffers: { selectedOption } }) => ({
  selectedOption
})

const mapDispatchToProps = {
  setSelectToAll,
  setSelectToSell
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select)
