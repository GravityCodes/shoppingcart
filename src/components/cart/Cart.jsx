import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export const Cart = (props) => {

    
    return (
            <Link to={"/Checkout"}>
              <div className={styles.cart} > 
                {props.numOfProducts > 0 && <p className={styles["product-amount-display"]}>{props.numOfProducts}</p>}     
                <ShoppingCart />
              </div>
            </Link>
    ) 
}

Cart.propTypes = {
  numOfProducts: PropTypes.number.isRequired,
}