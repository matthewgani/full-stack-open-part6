import { createSlice } from '@reduxjs/toolkit'

const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1,
}

const initialState = {
  message: null,
  style: null,
  timeoutID : null
}


const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotification(state, action) {
      return {
        message: action.payload,
        style: style,
      }
    },
    setTimeoutID(state, action) {
      console.log(action.payload)
      return {
        ...state, timeoutID: action.payload
      }
    },
    clearTimeoutID(state, action) {
      clearTimeout(state.timeoutID)
      return {
        ...state, timeoutID: ''
      }
    },
    hideNotification(state, action) {
      return initialState
    },
  },
})

export const { showNotification, hideNotification, setTimeoutID, clearTimeoutID } = notificationSlice.actions

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(clearTimeoutID())
    dispatch(showNotification(message))
    let id = setTimeout(() => {
      dispatch(hideNotification())
    }, time * 1000)
    dispatch(setTimeoutID(id))
  }
}
export default notificationSlice.reducer