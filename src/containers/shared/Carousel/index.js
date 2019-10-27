import { connect } from 'react-redux'
import { Carousel } from '../../../components/shared'
import {
  setSharedCarouselItem,
  setSharedCarouselPrev,
  setSharedCarouselNext,
  setSharedCarouselGoTo
} from '../../../actions/shared/Carousel'

const mapStateToProps = ({ sharedCarousel: { selectedItem } }) => ({
  selectedItem
})

const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(setSharedCarouselItem(index)),
  prev: () => dispatch(setSharedCarouselPrev()),
  next: () => dispatch(setSharedCarouselNext()),
  goTo: index => dispatch(setSharedCarouselGoTo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel)
