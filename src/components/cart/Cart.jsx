import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

export const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  if(isOpen == false) {
    
    return (
            <> 
            <p>{props.numOfProducts}</p>      
            <ShoppingCart />
            </>
    ) 
  }

  return (
    <p>This is the cart</p>
  )
}

Cart.propTypes = {
  numOfProducts: PropTypes.number.isRequired,
}