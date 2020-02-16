import { createSelector, createStructuredSelector } from 'reselect'

const getStateContact = ({ contactForm }) => contactForm

const getIsFormSubmittingPending = createSelector(
  getStateContact,
  ({ isPending }) => isPending
)

const getIsFormSubmittingSuccessful = createSelector(
  getStateContact,
  ({ success }) => success
)

export const contactForm = createStructuredSelector({
  isPending: getIsFormSubmittingPending,
  success: getIsFormSubmittingSuccessful
})
