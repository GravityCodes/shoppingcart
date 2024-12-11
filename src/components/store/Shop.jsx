import { useShopProducts } from "../../hooks/useShopProducts"
import { Product } from "../product/Product";
import styles from "./Shop.module.css"
import {Header} from "../header/Header"
import { useCartProducts } from "../../hooks/useCartProducts";

export const Shop = () => {
  const {products, loading, error} = useShopProducts({limit:5})
  const { updateCartProducts, amountOfProducts} = useCartProducts();



  if (loading) return <p>Loading....</p>;

  if (error) return  <p>A network error was encountered</p>;
  

  return (
    <>
    <Header numOfProducts={amountOfProducts} />
    
    <p style={{padding: "10px"}}>shop&gt;Category&gt;Eletronic</p>

    <div className={styles["product-container"]}>
      {products.map(product => <Product key={product.id} {...product} addToCart={updateCartProducts}/> )}
    </div>
    
    
    </>
  )
}