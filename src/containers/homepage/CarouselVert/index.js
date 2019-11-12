import { connect } from 'react-redux'
import { CarouselVert } from '../../../components/homepage'
import {
  setVertCarouselItem,
  setVertCarouselPrev,
  setVertCarouselNext,
  setVertCarouselGoTo
} from '../../../actions/homepage/CarouselVert'

const mapStateToProps = ({ vertCarousel: { selectedItem } }) => ({
  selectedItem
})

const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(setVertCarouselItem(index)),
  prev: () => dispatch(setVertCarouselPrev()),
  next: () => dispatch(setVertCarouselNext()),
  goTo: index => dispatch(setVertCarouselGoTo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselVert)
