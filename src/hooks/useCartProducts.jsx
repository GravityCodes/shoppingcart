import { useEffect, useState } from "react"
import localforage from "localforage";

export const useCartProducts = () => {
  const [cartProducts, setCartProducts] = useState({});
  let amountOfProducts = Object.values(cartProducts).reduce((accum, curr) => accum + curr, 0);

  useEffect(() => {
      localforage.getItem("cart").then((value) => {
        if(value != null) {
          setCartProducts(value);
        } else {
          const emptyCart = {};
          localforage.setItem("cart", emptyCart);
          setCartProducts(emptyCart);
        }

      });
  
  }, []);

  const updateCartProducts = (title, quantity) => {
    if(cartProducts[title] != undefined){
      localforage.setItem("cart", {...cartProducts, [title]: quantity + cartProducts[title]});
      setCartProducts((cartProducts) => ({...cartProducts, [title]: quantity + cartProducts[title]}))
    } else {
      localforage.setItem("cart", {...cartProducts, [title]: quantity});
      setCartProducts((cartProducts) => ({...cartProducts, [title]: quantity}));
    }
  }
  return {cartProducts, updateCartProducts, amountOfProducts}
}