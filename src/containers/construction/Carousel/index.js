import { connect } from 'react-redux'
import { Carousel } from '../../../components/construction'
import {
  setConstrCarouselItem,
  setConstrCarouselPrev,
  setConstrCarouselNext,
  setConstrCarouselGoTo
} from '../../../actions/construction/Carousel'

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
)(Carousel)
