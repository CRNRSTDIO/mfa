export const SHARED_CAROUSEL_SET_ITEM = 'SHARED_CAROUSEL_SET_ITEM'
export const SHARED_CAROUSEL_PREV = 'SHARED_CAROUSEL_PREV'
export const SHARED_CAROUSEL_NEXT = 'SHARED_CAROUSEL_NEXT'
export const SHARED_CAROUSEL_GOTO = 'SHARED_CAROUSEL_GOTO'

export const setSharedCarouselItem = selectedItem => ({
  type: SHARED_CAROUSEL_SET_ITEM,
  payload: {
    selectedItem
  }
})

export const setSharedCarouselPrev = () => (dispatch, getState) => {
  const { sharedCarousel: { selectedItem } } = getState()

  return dispatch({
    type: SHARED_CAROUSEL_PREV,
    payload: {
      selectedItem: selectedItem - 1
    }
  })
}

export const setSharedCarouselNext = () => (dispatch, getState) => {
  const { sharedCarousel: { selectedItem } } = getState()

  return dispatch({
    type: SHARED_CAROUSEL_NEXT,
    payload: {
      selectedItem: selectedItem + 1
    }
  })
}

export const setSharedCarouselGoTo = selectedItem => ({
  type: SHARED_CAROUSEL_GOTO,
  payload: {
    selectedItem
  }
})
