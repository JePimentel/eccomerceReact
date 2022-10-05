import { useDispatch, useSelector } from "react-redux"
import { addCredential } from "../redux/slices/credentialSlice"
import { isLoading } from "../redux/slices/loadingSlice"
import { login } from "../services"

const Login = () => {

  const dispatch = useDispatch()
  const credential = useSelector(state => state.credentialSlice)
  console.log(credential)

  const handleLogin = () => {
    dispatch(isLoading(true))
    login("test@gmail.com", "test1234")
      .then(res => dispatch(addCredential(res)))
      .catch(err => console.log('err: ', err))
      .finally(() => dispatch(isLoading(false)))
  }
  return (
    <div className="login">
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export { Login }

