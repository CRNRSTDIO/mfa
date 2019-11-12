export const THUMBS_CAROUSEL_SET_ITEM = 'THUMBS_CAROUSEL_SET_ITEM'
export const THUMBS_CAROUSEL_PREV = 'THUMBS_CAROUSEL_PREV'
export const THUMBS_CAROUSEL_NEXT = 'THUMBS_CAROUSEL_NEXT'
export const THUMBS_CAROUSEL_GOTO = 'THUMBS_CAROUSEL_GOTO'

export const setThumbsCarouselItem = selectedItem => ({
  type: THUMBS_CAROUSEL_SET_ITEM,
  payload: {
    selectedItem
  }
})

export const setThumbsCarouselPrev = () => (dispatch, getState) => {
  const { thumbsCarousel: { selectedItem } } = getState()

  return dispatch({
    type: THUMBS_CAROUSEL_PREV,
    payload: {
      selectedItem: selectedItem - 1
    }
  })
}

export const setThumbsCarouselNext = () => (dispatch, getState) => {
  const { thumbsCarousel: { selectedItem } } = getState()

  return dispatch({
    type: THUMBS_CAROUSEL_NEXT,
    payload: {
      selectedItem: selectedItem + 1
    }
  })
}

export const setThumbsCarouselGoTo = selectedItem => ({
  type: THUMBS_CAROUSEL_GOTO,
  payload: {
    selectedItem
  }
})
