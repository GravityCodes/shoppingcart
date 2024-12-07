import { useShopProducts } from "../store/useShopProducts"

export const FeatureProducts = () => {
  const {products, error, loading} = useShopProducts({limit:10});

  if(error) return <p>A network error has occured.</p>
  if (loading) return <p>Loading..</p>


  return (
    <>
    <h2>Featured Products</h2>
    {products.map(product => {
      return (
        <div key={product.id}>
          <img src={product.image} alt="" />
        </div>
      )
    })}
    </>
  )
}