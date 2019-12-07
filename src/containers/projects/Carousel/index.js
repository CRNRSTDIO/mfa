import { connect } from 'react-redux'
import { Carousel } from '../../../components/projects'
import {
  setOfferCarouselItem,
  setOfferCarouselPrev,
  setOfferCarouselNext,
  setOfferCarouselGoTo
} from '../../../actions/projects/Carousel'

const mapStateToProps = ({ projectsCarousel: { selectedItem } }) => ({
  selectedItem
})

const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(setOfferCarouselItem(index)),
  prev: () => dispatch(setOfferCarouselPrev()),
  next: () => dispatch(setOfferCarouselNext()),
  goTo: index => dispatch(setOfferCarouselGoTo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel)
