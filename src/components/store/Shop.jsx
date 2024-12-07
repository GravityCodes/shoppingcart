import { useShopProducts } from "./useShopProducts"

export const Shop = () => {
  const {products, loading, error} = useShopProducts({limit:5})

  if (loading) return <p>Loading....</p>;

  if (error) return  <p>A network error was encountered</p>;
  

  return (
    <>
    <h1>This is the shop</h1>
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img  src={`${product.image}`} alt="" />
          </div>
        )
      })}
    </div>
    </>
  )
}