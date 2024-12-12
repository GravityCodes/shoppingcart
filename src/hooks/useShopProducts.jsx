import {useState, useEffect} from "react"
import PropTypes from "prop-types";
import fetchProducts from "../modules/fetchProducts";

export const useShopProducts = (props) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {

    //const abortController = new AbortController();
    console.log(props.category)

    fetchProducts(props.category,props.limit)
        .then((response) => setProducts(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
     // return () => { abortController.abort();};
  }, [props.category,props.limit]);


  return {products, error, loading};

};

useShopProducts.propType = {
    limit: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
}