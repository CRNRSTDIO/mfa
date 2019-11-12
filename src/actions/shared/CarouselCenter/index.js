export const SHARED_CAROUSEL_CENTER_SET_ITEM = 'SHARED_CAROUSEL_CENTER_SET_ITEM'
export const SHARED_CAROUSEL_CENTER_PREV = 'SHARED_CAROUSEL_CENTER_PREV'
export const SHARED_CAROUSEL_CENTER_NEXT = 'SHARED_CAROUSEL_CENTER_NEXT'
export const SHARED_CAROUSEL_CENTER_GOTO = 'SHARED_CAROUSEL_CENTER_GOTO'

export const setSharedCarouselCenterItem = selectedItem => ({
  type: SHARED_CAROUSEL_CENTER_SET_ITEM,
  payload: {
    selectedItem
  }
})

export const setSharedCarouselCenterPrev = () => (dispatch, getState) => {
  const { sharedCarouselCenter: { selectedItem } } = getState()

  dispatch({
    type: SHARED_CAROUSEL_CENTER_PREV,
    payload: {
      selectedItem: selectedItem - 1
    }
  })
}

export const setSharedCarouselCenterNext = () => (dispatch, getState) => {
  const { sharedCarouselCenter: { selectedItem } } = getState()

  dispatch({
    type: SHARED_CAROUSEL_CENTER_NEXT,
    payload: {
      selectedItem: selectedItem + 1
    }
  })
}

export const setSharedCarouselCenterGoTo = selectedItem => ({
  type: SHARED_CAROUSEL_CENTER_GOTO,
  payload: {
    selectedItem
  }
})
