import { createSlice } from "@reduxjs/toolkit"
import { getAllProductsService } from "../../services"

export const productsSlice = createSlice({
  name: 'productsOrproduct',
  initialState: [],
  reducers: {
    getProducts: (state, action) => action.payload
  }
})

export const getAllProducts = () => disptach => {
  getAllProductsService()
    .then(res => disptach(getProducts(res)))
}

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer