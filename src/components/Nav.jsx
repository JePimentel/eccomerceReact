import { Navbar, NavbarBrand } from "reactstrap"
import { ImCart } from 'react-icons/im'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import '../index.css'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <Navbar
    className="p-4 d-flex justify-content-between align-items-center"
    dark
  >
      <NavbarBrand href="/">
        Eccomerce
      </NavbarBrand>

      <div className="navMenuOptions">
        <ul className="d-flex m-0 list-inline">
          <Link to={'/account'}>
            <li className="mx-5"> <AiOutlineUser /> </li>
          </Link>
          <Link to={'/purchases'}>
            <li className="mx-5"> <BiPurchaseTagAlt /> </li>
          </Link>
            <li className="mx-5"> <ImCart /> </li>
        </ul>
      </div>

  </Navbar>
  )
}

export { Nav }