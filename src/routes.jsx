import { HomePage } from "./components/homepage/HomePage"
import { Shop } from "./components/store/Shop"
import { Checkout } from "./components/cart/Checkout"




export const routes = [
  {
    path: "/",
    element:<HomePage />,
  },
  {
    path: "/shop/:category",
    element: <Shop />,
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/checkout",
    element: <Checkout />
  }
]