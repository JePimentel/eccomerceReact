import { configureStore } from "@reduxjs/toolkit"
import credentialSlice from "./slices/credentialSlice"
import loadingSlice from "./slices/loadingSlice"
import productsSlice from "./slices/productsSlice"

export default configureStore({
  reducer: {
    credentialSlice: credentialSlice,
    loadingSlice: loadingSlice,
    productsSlice: productsSlice
  }
})