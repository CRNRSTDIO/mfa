export const HOMEPAGE_CAROUSEL_SET_ITEM = 'HOMEPAGE_CAROUSEL_SET_ITEM'
export const HOMEPAGE_CAROUSEL_PREV = 'HOMEPAGE_CAROUSEL_PREV'
export const HOMEPAGE_CAROUSEL_NEXT = 'HOMEPAGE_CAROUSEL_NEXT'
export const HOMEPAGE_CAROUSEL_GOTO = 'HOMEPAGE_CAROUSEL_GOTO'

export const setHomepageCarouselItem = selectedItem => ({
  type: HOMEPAGE_CAROUSEL_SET_ITEM,
  payload: {
    selectedItem
  }
})

export const setHomepageCarouselPrev = () => (dispatch, getState) => {
  const { homepageCarousel: { selectedItem } } = getState()

  return dispatch({
    type: HOMEPAGE_CAROUSEL_PREV,
    payload: {
      selectedItem: selectedItem - 1
    }
  })
}

export const setHomepageCarouselNext = () => (dispatch, getState) => {
  const { homepageCarousel: { selectedItem } } = getState()

  return dispatch({
    type: HOMEPAGE_CAROUSEL_NEXT,
    payload: {
      selectedItem: selectedItem + 1
    }
  })
}

export const setHomepageCarouselGoTo = selectedItem => ({
  type: HOMEPAGE_CAROUSEL_GOTO,
  payload: {
    selectedItem
  }
})
