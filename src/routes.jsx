import { HomePage } from "./components/homepage/HomePage"
import { Shop } from "./components/store/Shop"


export const routes = [
  {
    path: "/",
    element:<HomePage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  }
]