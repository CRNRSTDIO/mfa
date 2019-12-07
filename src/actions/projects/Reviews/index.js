export const CONSTR_CAROUSEL_SET_ITEM = 'CONSTR_CAROUSEL_SET_ITEM'
export const CONSTR_CAROUSEL_PREV = 'CONSTR_CAROUSEL_PREV'
export const CONSTR_CAROUSEL_NEXT = 'CONSTR_CAROUSEL_NEXT'
export const CONSTR_CAROUSEL_GOTO = 'CONSTR_CAROUSEL_GOTO'

export const setConstrCarouselItem = selectedItem => ({
  type: CONSTR_CAROUSEL_SET_ITEM,
  payload: {
    selectedItem
  }
})

export const setConstrCarouselPrev = () => (dispatch, getState) => {
  const { constrCarousel: { selectedItem } } = getState()

  dispatch({
    type: CONSTR_CAROUSEL_PREV,
    payload: {
      selectedItem: selectedItem - 1
    }
  })
}

export const setConstrCarouselNext = () => (dispatch, getState) => {
  const { constrCarousel: { selectedItem } } = getState()

  dispatch({
    type: CONSTR_CAROUSEL_NEXT,
    payload: {
      selectedItem: selectedItem + 1
    }
  })
}

export const setConstrCarouselGoTo = selectedItem => ({
  type: CONSTR_CAROUSEL_GOTO,
  payload: {
    selectedItem
  }
})
