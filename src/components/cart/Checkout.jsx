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
        <h1>Cart</h1>
      </div>

      <div className={styles.main}>
        {Object.keys(cartProducts).length === 0
          ?   <>
                <p><i>Your cart is empty</i></p>
                <Link to={"/shop"} ><button className={styles["shop-btn"]}>Shop Now</button></Link>
              </>
          :   <>
                <div className={styles.products}>
                  {Object.values(cartProducts).map(product => {
                   return <div key={product.id} className={styles.product}>
                            <div className={styles["image-wrapper"]}><img src={product.image} alt="" /></div>
                            <p>{product.title}</p>
                            <div className={styles.price}>
                              <p>${product.price}</p>
                            </div>
                            <div className={styles["quantity-bar"]}>
                              <button onClick={() => removeCartProducts(product.title)}>{product.quantity < 2 ? <Trash color="#aa2016" /> :<MinusCircleIcon />}</button>
                              <p>{product.quantity}</p>
                              <PlusCircleIcon onClick={() => updateCartProducts(product.title, product.quantity, product.image, product.price, product.id)} />
                            </div>
                          </div>
                  })}
                </div>

                <div className={styles["checkout-wrapper"]}>

                  <button className={styles["checkout-btn"]}>Checkout</button>
                  <div className={styles["final-price"]}>
                    Total <span className={styles["final-price-num"]}>${finalPrice.toFixed(2)}</span>
                  </div>
                  
                </div>

              </>}  
      </div> 
    </>
  )
}