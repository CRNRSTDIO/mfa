/* global fetch */
export const CONTACT_SUBMISSION = 'CONTACT_SUBMISSION'

const encode = data => Object.keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&')

const contactSubmissionPending = () => ({
  type: `${CONTACT_SUBMISSION}_PENDING`
})

const contactSubmissionSuccess = () => ({
  type: `${CONTACT_SUBMISSION}_SUCCESS`
})

export const clearContactSubmission = () => ({
  type: `${CONTACT_SUBMISSION}_CLEAR`
})

export const onSubmit = (data) => async (dispatch) => {
  dispatch(contactSubmissionPending())

  await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encode({
      'form-name': 'contact',
      ...data
    })
  })

  dispatch(contactSubmissionSuccess())
}
