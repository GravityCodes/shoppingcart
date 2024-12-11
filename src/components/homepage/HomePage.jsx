import styles from "./HomePage.module.css"
import heroImg from "../../assets/imgs/hero-background.jpg"
import { Link } from "react-router-dom"
import { useCategories } from "../categories/useCategories"
import { CategoryButton } from "../categories/CategoryButton"
import { FeatureProducts } from "../featureProducts/FeatureProducts"
import {Header} from "../header/Header"
import { useCartProducts } from "../../hooks/useCartProducts"

export const HomePage = () => {

  const {categories, error, loading} = useCategories();
  const { updateCartProducts, amountOfProducts} = useCartProducts();

  return (
    <>
      <Header numOfProducts={amountOfProducts} />
    
      <div className={styles.hero}>
        <img src={heroImg} alt="" />
        <p className={styles["hero-children"]}>Reasonable products for Reasonable prices</p>
        <div className={styles["hero-children-link-wrapper"]}>
        <Link className={styles["link-btn"]} to={"/shop"}> Start Shopping</Link>
        </div>
      </div>

      <div className={styles["categories-button-grid"]}>
        {
          loading ? <p>Loading...</p> 
          : error ? <p> A network Error has been encountered</p>
          : categories.map(category => <CategoryButton key={category} name={category} />)
        }
      </div>
      
      <FeatureProducts updateCartProducts={updateCartProducts} />
    
    </>
  )
}