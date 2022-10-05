import { createSlice } from "@reduxjs/toolkit"

export const credentialSlice = createSlice({
  name: 'credentials',
  initialState: {},
  reducers: {
    addCredential: (state, action) => action.payload 
  }
})

export const { addCredential } = credentialSlice.actions

export default credentialSlice.reducer