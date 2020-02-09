export const PROCESS_SET_CURRENT_TAB = 'PROCESS_SET_CURRENT_TAB'

export const setCurrentTab = tab => ({
  type: PROCESS_SET_CURRENT_TAB,
  payload: {
    tab
  }
})
