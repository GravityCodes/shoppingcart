import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  if(isOpen == false) return <ShoppingCart />

  return (
    <p>This is the cart</p>
  )
}