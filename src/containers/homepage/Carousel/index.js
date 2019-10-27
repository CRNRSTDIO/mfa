import { connect } from 'react-redux'
import { Carousel } from '../../../components/homepage'
import {
  setHomepageCarouselItem,
  setHomepageCarouselPrev,
  setHomepageCarouselNext,
  setHomepageCarouselGoTo
} from '../../../actions/homepage/Carousel'

const mapStateToProps = ({ homepageCarousel: { selectedItem } }) => ({
  selectedItem
})

const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(setHomepageCarouselItem(index)),
  prev: () => dispatch(setHomepageCarouselPrev()),
  next: () => dispatch(setHomepageCarouselNext()),
  goTo: index => dispatch(setHomepageCarouselGoTo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel)
