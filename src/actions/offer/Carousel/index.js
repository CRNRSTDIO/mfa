export const OFFER_CAROUSEL_SET_ITEM = 'OFFER_CAROUSEL_SET_ITEM'
export const OFFER_CAROUSEL_PREV = 'OFFER_CAROUSEL_PREV'
export const OFFER_CAROUSEL_NEXT = 'OFFER_CAROUSEL_NEXT'
export const OFFER_CAROUSEL_GOTO = 'OFFER_CAROUSEL_GOTO'

export const setOfferCarouselItem = selectedItem => ({
  type: OFFER_CAROUSEL_SET_ITEM,
  payload: {
    selectedItem
  }
})

export const setOfferCarouselPrev = () => (dispatch, getState) => {
  const { offerCarousel: { selectedItem } } = getState()

  return dispatch({
    type: OFFER_CAROUSEL_PREV,
    payload: {
      selectedItem: selectedItem - 1
    }
  })
}

export const setOfferCarouselNext = () => (dispatch, getState) => {
  const { offerCarousel: { selectedItem } } = getState()

  return dispatch({
    type: OFFER_CAROUSEL_NEXT,
    payload: {
      selectedItem: selectedItem + 1
    }
  })
}

export const setOfferCarouselGoTo = selectedItem => ({
  type: OFFER_CAROUSEL_GOTO,
  payload: {
    selectedItem
  }
})
