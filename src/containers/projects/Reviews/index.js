import { connect } from 'react-redux'
import { Reviews } from '../../../components/projects'
import {
  setConstrCarouselItem,
  setConstrCarouselPrev,
  setConstrCarouselNext,
  setConstrCarouselGoTo
} from '../../../actions/projects/Reviews'

const mapStateToProps = ({ constrCarousel: { selectedItem } }) => ({
  selectedItem
})

const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(setConstrCarouselItem(index)),
  prev: () => dispatch(setConstrCarouselPrev()),
  next: () => dispatch(setConstrCarouselNext()),
  goTo: index => dispatch(setConstrCarouselGoTo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
