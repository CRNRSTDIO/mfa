import { connect } from 'react-redux'
import { Listing } from '../../../components/offer'

const mapStateToProps = ({ selectOffers: { selectedOption } }) => ({
  selectedOption
})

export default connect(
  mapStateToProps
)(Listing)
