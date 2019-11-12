import { connect } from 'react-redux'
import { CarouselCenter } from '../../../components/shared'
import {
  setSharedCarouselCenterItem,
  setSharedCarouselCenterPrev,
  setSharedCarouselCenterNext,
  setSharedCarouselCenterGoTo
} from '../../../actions/shared/CarouselCenter'

const mapStateToProps = ({ sharedCarouselCenter: { selectedItem } }) => ({
  selectedItem
})

const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(setSharedCarouselCenterItem(index)),
  prev: () => dispatch(setSharedCarouselCenterPrev()),
  next: () => dispatch(setSharedCarouselCenterNext()),
  goTo: index => dispatch(setSharedCarouselCenterGoTo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselCenter)
