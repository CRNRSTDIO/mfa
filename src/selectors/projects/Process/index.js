import { createSelector, createStructuredSelector } from 'reselect'

const getStateProcess = ({ processProject }) => processProject

const getCurrentTab = createSelector(
  getStateProcess,
  ({ tab }) => tab
)

export default createStructuredSelector({
  currentTab: getCurrentTab
})
