import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap'
import { isLoading } from '../redux/slices/loadingSlice'
import { getProducts } from '../redux/slices/productsSlice'
import { getAllProductsService, getCategories } from '../services'

const AccordionCategory = () => {
  const [open, setOpen] = useState('')
  const [categories, setCategories] = useState([])

  const dispatch = useDispatch()

  const toggle = (id) => {
    if (open === id) setOpen()
      else setOpen(id)
  }

  const getCategory = (id) => {
    dispatch(isLoading(true))
    getAllProductsService()
      .then(res => {
        const productsCategory = res.filter(r => r.category.id === id)
        dispatch(getProducts(productsCategory))
      })
      .finally(() => dispatch(isLoading(false)))
  }

  const getAllCategories = () => {
    dispatch(isLoading(true))
    getAllProductsService()
      .then(res => dispatch(getProducts(res)))
      .finally(() => dispatch(isLoading(false)))
  }

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res))
  }, [])

  return (
    <div className='accordionContainer'>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId='1'> Categories </AccordionHeader>
            <AccordionBody accordionId='1'>
              <li onClick={getAllCategories}> All products </li>
            </AccordionBody>
            {
              categories.map(c => (
                <AccordionBody accordionId='1' key={c.id}>
                  <li 
                    onClick={() => getCategory(c.id)}
                  > 
                    {c.name} 
                  </li>
                </AccordionBody>
              ))
            }
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export { AccordionCategory }