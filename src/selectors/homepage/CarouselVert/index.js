import { createSelector } from 'reselect'
import chunk from 'lodash.chunk'

const getOwnEdges = (_, { edges }) => edges

export const chunkEdges = createSelector(
  getOwnEdges,
  edges => chunk(edges, 2)
)
