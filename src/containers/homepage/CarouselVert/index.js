import { connect } from 'react-redux'
import { CarouselVert } from '../../../components/homepage'
import { chunkEdges } from '../../../selectors/homepage/CarouselVert'

const mapStateToProps = (_, ownProps) => ({
  chunkedEdges: chunkEdges(_, ownProps)
})

export default connect(
  mapStateToProps
)(CarouselVert)
