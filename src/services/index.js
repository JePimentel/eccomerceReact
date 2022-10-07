import axios from 'axios'

const API = 'https://ecommerce-api-react.herokuapp.com/api/v1'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJpYXQiOjE2NjQ5MTMwMjQsImV4cCI6MTY3MDA5NzAyNH0.OxVYqjymqcoS3q4VRhrGjqD2IKuGm57njAzb18WzaB8'

export const login = async (email, password) => (
  await axios.post( API + '/users/login', {
    "email": email,
    "password": password
  }).then(res => res.data.data)
    .catch(err => err.message)
)

export const getCategories = async () => (
  await axios.get( API + '/products/categories', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data.data.categories)
)

export const getAllProductsService = async () => (
  await axios.get(API + '/products', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data.data.products)
)

export const getProductById = async (id) => (
  await axios.get( API + `/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(r => r.data.data.product)
)