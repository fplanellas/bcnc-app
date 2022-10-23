import { Link } from "react-router-dom"
import { ShoppingCart } from "../../product/components/ShoppingCart"


export const Header = () => {
  return (
    <header>
      <Link to={`/`}>
          <h1>
            Bcnc App 
          </h1>
      </Link>

      
    <ShoppingCart />
    </header>
  )
}

