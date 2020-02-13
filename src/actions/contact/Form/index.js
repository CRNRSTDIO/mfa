/* global fetch */

const encode = data => Object.keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&')

export const onSubmit = (data) => async () => {
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
}
