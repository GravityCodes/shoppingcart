import { useState } from "react"
import Styles from "./Sidebar.module.css"
import { Menu } from "lucide-react";

export const Sidebar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  if(isOpen == false ) return <Menu />

  return (
    <p>Sidebar</p>
  )
}