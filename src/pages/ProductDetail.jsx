import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { CarouselImgs } from "../components/Carousel"
import { isLoading } from "../redux/slices/loadingSlice"
import { getProductById } from "../services"

const ProductDetail = () => {

  const [product, setProduct] = useState({})
  const [imgs, setImgs] = useState([])
  const loading = useSelector(state => state.loadingSlice)

  const { id } = useParams()
  const dispatch = useDispatch()

  const buildImagesData = data => {
    for (let i = 1; i < data.length; i++) {
      const element = array[index];
      
    }
  }

  useEffect(() => {
    dispatch(isLoading(true))
    getProductById(id)
      .then(r => setProduct(r))
      .finally(() => {
        dispatch(isLoading(false))
      })
  }, [])
  return (
    <>
      {
        loading ? 
          ''
        :
          <div>
            {/* <CarouselImgs items={product.productImgs}/> */}
          {/* <UncontrolledCarousel items={items}/> */}
          </div>
      }
    </>
  )
}

export {ProductDetail}