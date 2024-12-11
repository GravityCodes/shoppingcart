import { useShopProducts } from "../../hooks/useShopProducts"
import { Product } from "../product/Product"
import styles from "./FeatureProducts.module.css"
import PropTypes from "prop-types"

export const FeatureProducts = (props) => {
  const {products, error, loading} = useShopProducts({limit:10});

  if(error) return <p>A network error has occured.</p>
  if (loading) return <p>Loading..</p>


  return (
    <>
    <h2>Featured Products</h2>
    <div className={styles["product-container"]}>
      {products.map(product => <Product key={product.id} {...product} addToCart={props.updateCartProducts}/>)}
    </div>
    </>
  )                                    
}

FeatureProducts.propTypes = {
  updateCartProducts: PropTypes.func.isRequired,
}