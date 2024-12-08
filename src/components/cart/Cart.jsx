import { ShoppingCart } from "lucide-react";
import { useState } from "react"

export const Cart = () => {
  const [isOpen, SetIsOpen] = useState(false);

  if(isOpen == false) return <ShoppingCart />

  return (
    <p>Shopping Cart</p>
  )
}