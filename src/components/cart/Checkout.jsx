import { ChevronLeft, MinusCircleIcon, PlusCircleIcon, Trash } from "lucide-react";
import { useCartProducts } from "../../hooks/useCartProducts"
import styles from "./Checkout.module.css"
import { Link, useNavigate } from "react-router-dom";


export const Checkout = () => {

  let navigate = useNavigate();
  const {cartProducts, updateCartProducts, finalPrice, removeCartProducts} = useCartProducts();
  
  return (
    <>
      <div className={styles.header}>
        <ChevronLeft className={styles["back-arrow"]} size={34} onClick={() => navigate(-1)}/>
        <h1 className={styles["checkout-title"]}>Cart</h1>
      </div>

      <div className={styles.main}>
        {Object.keys(cartProducts).length === 0
          ?   <div>
                <p><i>Your cart is empty</i></p>
                <Link to={"/shop"} ><button className={styles["shop-btn"]}>Shop Now</button></Link>
              </div>
          :   <>
                <div className={styles.products}>
                  {Object.values(cartProducts).map(product => {
                   return <div key={product.id} className={styles.product}>
                            <div className={styles["image-wrapper"]}><img src={product.image} alt="" /></div>
                            <div className={styles.title}><p>{product.title}</p></div>
                            <div className={styles.price}>
                              <p>${product.price}</p>
                            </div>
                            <div className={styles["quantity-bar"]}>
                              {product.quantity < 2 ? <Trash color="#aa2016" onClick={() => removeCartProducts(product.title)}/> :<MinusCircleIcon onClick={() => removeCartProducts(product.title)} />}
                              <p>{product.quantity}</p>
                              <PlusCircleIcon onClick={() => updateCartProducts(product.title, product.quantity, product.image, product.price, product.id)} />
                            </div>
                          </div>
                  })}
                </div>

                <div className={styles["checkout-wrapper"]}>
                  <div className={styles.subtotal}>
                    <p>subtotal</p>
                    <p>${finalPrice.toFixed(2)}</p>
                  </div>
                  <div className={styles.tax}>
                    <p>estimated tax</p>
                    <p>${(finalPrice * .0625).toFixed(2)}</p>
                  </div>
                  <div className={styles["final-price"]}>
                      <p>Total</p>
                      <p>${(finalPrice + (finalPrice * .0625)).toFixed(2)}</p>
                  </div>
                  <button className={styles["checkout-btn"]}>Checkout</button>
                  
                  
                </div>

              </>}  
      </div> 
    </>
  )
}