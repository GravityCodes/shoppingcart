import PropTypes from "prop-types";
import styles from "./Product.module.css"
import { Check } from "lucide-react";
import { useState } from "react";



export const Product = (props) => {
  const [addToCart, setAddToCart] = useState(false);

  const buttonClickHandler = () => {
    props.addToCart(props.title, 1, props.image, props.price, props.id);
    if(addToCart == false) {
      setAddToCart(true);
      setTimeout(() => {
        setAddToCart(false)}, 3000);
    } 
  }

  return (
    <div className={`${styles["product-wrapper"]} `} >
        {addToCart && 
          <div className={styles["added-to-cart"]}>
           <Check color="green" size={15}/> Added to cart 
          </div>}
        <div className={styles.img}>
          <img src={props.image} alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.price}>${props.price}</p>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.category}>{props.category}</p>
          <button className={styles.button} onClick={buttonClickHandler}>Add to Cart</button>
        </div>
    </div>
  )
}


Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.number,
}