import styles from "./HomePage.module.css"
import heroImg from "../../assets/imgs/hero-background.jpg"
import { Link } from "react-router-dom"
import { useCategories } from "../categories/useCategories"
import { CategoryButton } from "../categories/CategoryButton"
import { FeatureProducts } from "../featureProducts/FeatureProducts"
import {Header} from "../header/Header"
import { useCartProducts } from "../../hooks/useCartProducts"

export const HomePage = () => {


  const { amountOfProducts} = useCartProducts();

  return (
    <>
      <Header numOfProducts={amountOfProducts} />
    
      <div className={styles.hero}>
        <img src={heroImg} alt="" className={styles.img}/>
        <p className={styles["hero-children"]}>Reasonable products for Reasonable prices</p>
        <div className={styles["hero-children-link-wrapper"]}>
        <Link className={styles["link-btn"]} to={"/shop"}> Start Shopping</Link>
        </div>
      </div>

      
    
    </>
  )
}