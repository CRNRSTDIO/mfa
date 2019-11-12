export const VERT_CAROUSEL_SET_ITEM = 'VERT_CAROUSEL_SET_ITEM'
export const VERT_CAROUSEL_PREV = 'VERT_CAROUSEL_PREV'
export const VERT_CAROUSEL_NEXT = 'VERT_CAROUSEL_NEXT'
export const VERT_CAROUSEL_GOTO = 'VERT_CAROUSEL_GOTO'

export const setVertCarouselItem = selectedItem => ({
  type: VERT_CAROUSEL_SET_ITEM,
  payload: {
    selectedItem
  }
})

export const setVertCarouselPrev = () => (dispatch, getState) => {
  const { vertCarousel: { selectedItem } } = getState()

  return dispatch({
    type: VERT_CAROUSEL_PREV,
    payload: {
      selectedItem: selectedItem - 1
    }
  })
}

export const setVertCarouselNext = () => (dispatch, getState) => {
  const { vertCarousel: { selectedItem } } = getState()

  return dispatch({
    type: VERT_CAROUSEL_NEXT,
    payload: {
      selectedItem: selectedItem + 1
    }
  })
}

export const setVertCarouselGoTo = selectedItem => ({
  type: VERT_CAROUSEL_GOTO,
  payload: {
    selectedItem
  }
})
