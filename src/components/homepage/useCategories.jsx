import { useState, useEffect } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products/categories', {mode: "cors"})
      .then(response => {
        if(response.status >= 400) {
          throw new Error("server error");
          }
        return response.json();
      })
      .then(json => setCategories(json))
      .catch(error => setError(error))
      .finally(() => setLoading(false));

  }, []);
  
  return {categories, error, loading};
}