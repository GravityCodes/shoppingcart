import styles from "./HomePage.module.css"
import heroImg from "../../assets/imgs/hero-background.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCategories } from "../categories/useCategories"
import { CategoryButton } from "../categories/CategoryButton"
import { Outlet } from "react-router-dom"
import { FeatureProducts } from "../featureProducts/FeatureProducts"

export const HomePage = () => {

  const {categories, error, loading} = useCategories();


  return (
    <>
      <h1 role="heading">Fordly</h1>

      <div className={styles.header}>
        <img src={heroImg} alt="" />
        <p className={styles["header-children"]}>Reasonable products for Reasonable prices</p>
        <div className={styles["header-children-link-wrapper"]}>
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
      
      <FeatureProducts />
    
    </>
  )
}