import { createSlice } from '@reduxjs/toolkit'

const initialState = 'NOTIFIED'


const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {

  }
})

export default notificationSlice.reducer