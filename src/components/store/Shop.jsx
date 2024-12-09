import { useShopProducts } from "./useShopProducts"
import { Product } from "../product/Product";
import styles from "./Shop.module.css"
import {Header} from "../header/Header"

export const Shop = () => {
  const {products, loading, error} = useShopProducts({limit:5})


  if (loading) return <p>Loading....</p>;

  if (error) return  <p>A network error was encountered</p>;
  

  return (
    <>
    <Header />
    
    
    <div className={styles["product-container"]}>
      {products.map(product => <Product key={product.id} {...product} /> )}
    </div>
    
    
    </>
  )
}