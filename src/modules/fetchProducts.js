export default async function fetchProducts (category, limit) {
  
  const response = await fetch(`https://fakestoreapi.com/products${category}?limit=${limit}`, {mode: "cors",});
        
  if(response.status >= 400) {
      throw new Error("server error");
    }
    
  return await response.json();
        
}