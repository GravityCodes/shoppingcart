import { useEffect, useState } from "react"
import styles from "./Sidebar.module.css"
import { Library, Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import { useCategories } from "../categories/useCategories";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {categories, error, loading} = useCategories();

  useEffect(() => {
    if(isOpen){
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);


  if(isOpen == false ) return <button onClick={() => setIsOpen(true)}> <Menu /> </button>

  if(error) return <p>A network error has occured</p>

  if(loading) return <p>Loading..</p>
  return (
    <>
    <Menu />
    <div className={styles["sidebar-wrapper"]}>
      <button onClick={() => setIsOpen(false)}>
        <X />
      </button>
      <ul>
        {categories.map((category,index) => <NavLink key={index} to={`/shop/${category}`} onClick={() => setIsOpen(false)} >{category}</NavLink>)}
        <NavLink to={"/shop"} onClick={() => setIsOpen(false)}>All</NavLink>
      </ul>
    </div>
    </>
  )
}

