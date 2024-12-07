import { useShopProducts } from "./useShopProducts"
import { Product } from "../product/Product";
import styles from "./Shop.module.css"

export const Shop = () => {
  const {products, loading, error} = useShopProducts({limit:5})

  if (loading) return <p>Loading....</p>;

  if (error) return  <p>A network error was encountered</p>;
  

  return (
    <>
    <h1>This is the shop</h1>
    
    <div className={styles["product-container"]}>
      {products.map(product => <Product key={product.id} {...product} /> )}
    </div>
    
    
    </>
  )
}