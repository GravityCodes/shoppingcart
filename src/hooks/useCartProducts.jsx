import { useEffect, useState } from "react"
import localforage from "localforage";

export const useCartProducts = () => {
  const [cartProducts, setCartProducts] = useState({});
  let amountOfProducts = Object.values(cartProducts).reduce((accum, curr) => accum + curr.quantity, 0);
  let finalPrice = Object.values(cartProducts).reduce((accum, curr) => accum + (curr.quantity * curr.price), 0);
  

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

  const updateCartProducts = (title, quantity, image, price, id) => {

    if(cartProducts[title] != undefined){

      localforage.setItem("cart", {...cartProducts, [title]: {...cartProducts[title], quantity: cartProducts[title].quantity + 1}});
      
      setCartProducts((cartProducts) => ({...cartProducts, [title]: {...cartProducts[title], quantity: cartProducts[title].quantity + 1}}))
    } else {
      localforage.setItem("cart", {...cartProducts, [title]: {quantity: quantity, image: image, price: price, id: id, title:title}});
      setCartProducts((cartProducts) => ({...cartProducts, [title]: {quantity: quantity, image: image, price: price, id: id, title: title}}));
    }
  }

  const removeCartProducts = (title) => {
    if(cartProducts[title] != undefined){
      if(cartProducts[title].quantity > 1) {
      localforage.setItem("cart", {...cartProducts, [title]: {...cartProducts[title], quantity: cartProducts[title].quantity - 1}} );
      setCartProducts(cartProducts => ({...cartProducts, [title]: {...cartProducts[title], quantity: cartProducts[title].quantity - 1}}) )
      } else {
        delete cartProducts[title];
        localforage.setItem("cart", {...cartProducts});
        setCartProducts(cartProducts => ({...cartProducts}));
      }
    }
  } 

  
  return {cartProducts, updateCartProducts, amountOfProducts, finalPrice, removeCartProducts}
}