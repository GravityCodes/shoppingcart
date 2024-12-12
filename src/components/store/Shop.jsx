import { Product } from "../product/Product";
import styles from "./Shop.module.css"
import {Header} from "../header/Header"

import { useCartProducts } from "../../hooks/useCartProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchProducts from "../../modules/fetchProducts";

export const Shop = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { updateCartProducts, amountOfProducts} = useCartProducts();
  const {category} = useParams();
  const limit = "";

  

  useEffect( () => {

    let categoryArg = "";

    switch(category){
      case "electronics":
        categoryArg = "/category/electronics";
        break;
      case "jewelery":
        categoryArg = "/category/jewelery";
        break;
      case "men's clothing":
        categoryArg = "/category/men's%20clothing";
        break;
      case "women's clothing":
        categoryArg = "/category/women's clothing";
        break;
    }

    fetchProducts(categoryArg,limit)
        .then((response) => setProducts(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

  }, [category]);

  if (loading) return <p>Loading....</p>;

  if (error) return  <p>A network error was encountered</p>;

  return (
    <>
    <Header numOfProducts={amountOfProducts} />
    
    <p style={{padding: "10px"}} className={styles.breadcrum}>Shop &gt; Category &gt; {category == undefined ? "All" : category.toString().charAt(0).toUpperCase() + category.toString().slice(1)}</p>
    
    <main>
      <div className={styles["product-container"]}>
        {products.map(product => <Product key={product.id} {...product} addToCart={updateCartProducts}/> )}
      </div>
    </main>
    
    
    </>
  )
}