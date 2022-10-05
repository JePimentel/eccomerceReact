import { createSlice } from "@reduxjs/toolkit"

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    isLoading: (state, action) => action.payload
  }
})

export const { isLoading } = loadingSlice.actions

export default loadingSlice.reducer