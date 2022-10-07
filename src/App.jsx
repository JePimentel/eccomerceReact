import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loading } from './pages/Loading'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Nav } from './components/Nav'
import { ProductDetail } from './pages/ProductDetail'

function App() {

  const {
    credentialSlice,
    loadingSlice
  } = useSelector(state => state)

  return (
    <div className="App">
      {loadingSlice && <Loading />}
        <BrowserRouter>
          {/* {credentialSlice.token && <Nav />}  */}
          <Nav />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App


// To create a new user
// {
//   "firstName": "Max",
//   "lastName": "Rangel",
//   "email": "test@gmail.com",
//   "password": "test1234",
//   "phone": "1234567891",
//   "role": "admin"
// }

 // const login = async () => {
  //   await axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', {
  //     "email": "test@gmail.com",
  //     "password": "test1234"
  //   }).then(r => console.log(r))
  // }