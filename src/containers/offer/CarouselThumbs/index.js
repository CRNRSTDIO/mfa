import { connect } from 'react-redux'
import { CarouselThumbs } from '../../../components/offer'
import {
  setThumbsCarouselItem,
  setThumbsCarouselPrev,
  setThumbsCarouselNext,
  setThumbsCarouselGoTo
} from '../../../actions/offer/CarouselThumbs'

const mapStateToProps = ({ thumbsCarousel: { selectedItem } }) => ({
  selectedItem
})

const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(setThumbsCarouselItem(index)),
  prev: () => dispatch(setThumbsCarouselPrev()),
  next: () => dispatch(setThumbsCarouselNext()),
  goTo: index => dispatch(setThumbsCarouselGoTo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselThumbs)
