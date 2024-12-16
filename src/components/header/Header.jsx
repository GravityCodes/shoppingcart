import { Sidebar } from "../sidebar/Sidebar"
import { Cart } from "../cart/Cart"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export const Header = (props) => {


  return (
    <div className={styles.header}>
        <Sidebar />
        <h1 role="heading" ><Link to="/">Fordly</Link></h1>
        <Cart numOfProducts={props.numOfProducts}/>
      </div>
  )
}

Header.propTypes = {
  numOfProducts: PropTypes.number.isRequired,
}