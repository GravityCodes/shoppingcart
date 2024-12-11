import PropTypes from "prop-types";
import styles from "./Product.module.css"



export const Product = (props) => {
  return (
    <div className={styles["product-wrapper"]} >
        <div className={styles.img}>
          <img src={props.image} alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.price}>${props.price}</p>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.category}>{props.category}</p>
          <button onClick={() => props.addToCart(props.title, 1)}>Add to Cart</button>
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
}