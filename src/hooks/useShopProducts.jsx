import {useState, useEffect} from "react"
import PropTypes from "prop-types";

export const useShopProducts = (props) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {

    //const abortController = new AbortController();

    fetch(`https://fakestoreapi.com/products?limit=${props.limit}`, {
      mode: "cors",
      //signal: abortController.signal,
    })
      .then((response) => {
        if(response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

     // return () => { abortController.abort();};
  }, []);



  return {products, error, loading};

};

useShopProducts.propType = {
    limit: PropTypes.number.isRequired,
}