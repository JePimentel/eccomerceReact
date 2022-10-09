import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { 
  Button, 
  Card, 
  CardBody, 
  CardGroup,
  CardImg, 
  CardText, 
  CardTitle 
} from "reactstrap"
import { AccordionCategory } from "../components/AccordionCategory"
import { getProducts } from "../redux/slices/productsSlice"
import { getAllProductsService, sendProductToCart } from "../services"
import { IoMdAdd } from 'react-icons/io'
import { Link } from "react-router-dom"

const Home = () => {
  
  const [productAdded, setProductAdded] = useState({})
  const products = useSelector(state => state.productsSlice)
  const isLoading = useSelector(state => state.loadingSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllProductsService()
      .then(res => dispatch(getProducts(res)))
  }, [])

  const addProductToCart = id => {
    sendProductToCart(id, 1)
      .then(r => r)
      .catch(err => alert(err))
  }
 
  console.log(productAdded)
  return (
    <div className="home">
      <AccordionCategory />
      <CardGroup>
        {
          isLoading ?
            ''
          :
            products.map(p => (
              <Card>
                <picture>
                  <Link to={`/product/${p.id}`}>
                    <CardImg
                      alt="Card image cap"
                      src={p.productImgs[0]}
                      top
                      width="100%"
                      />
                  </Link>
                </picture>
                <CardBody>
                  <CardTitle tag="h5">
                    {p.title}
                  </CardTitle>
                  <CardText>
                      <p className="priceTitle">Price</p>
                      <p>${p.price}</p>
                  </CardText>
                  <Button
                    onClick={() => addProductToCart(p.id)}
                  >
                    <IoMdAdd />
                  </Button>
                </CardBody>
              </Card>
            ))
        }
      </CardGroup>
    </div>
  )
}

export { Home }