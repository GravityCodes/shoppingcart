import { useEffect, useState } from "react"
import styles from "./Sidebar.module.css"
import { ChevronRightIcon, Menu, X } from "lucide-react";
import { useCategories } from "../categories/useCategories";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {categories, error, loading} = useCategories();
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if(isOpen){
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);


  if(isOpen  == false) return <button onClick={() => setIsOpen(true)}> <Menu size={22} className={styles.menu}/> </button>

  if(error) return <p>A network error has occurred</p>

  if(loading) return <p>Loading..</p>

  function handleSidebarExit(){
    setExit(true);
    setTimeout(() => {
      setIsOpen(false);
      setExit(false);
    }, 200);
  }
  return (
    <>
    <button style={{padding:"1px  6px"}}>
      <Menu  size={22}/>
    </button>
   <div className={`${styles.background} ${exit && styles.exit}`} onClick={handleSidebarExit} ></div>
    <div className={`${styles["sidebar-wrapper"]} ${exit ? styles.exit : ""}`}>  
       <button className={styles["close-button"]} onClick={handleSidebarExit}>
        <X size={20} color="white" className={styles["exit-btn"]}/>
      </button>
      <ul>
        {categories.map((category,index) => <NavLink  key={index} to={`/shop/${category}`} onClick={() => setIsOpen(false)} > <li >{category.toString().charAt(0).toUpperCase() + category.toString().slice(1)} <ChevronRightIcon className={styles["right-icon"]} size={15}/></li></NavLink>)}
        
        <NavLink to={"/shop"} onClick={() => setIsOpen(false)}><li>All <ChevronRightIcon className={styles["right-icon"]} size={15} /></li></NavLink>
        <NavLink to={"/"} onClick={() => setIsOpen(false)}><li>Home <ChevronRightIcon className={styles["right-icon"]} size={15} /></li></NavLink>
        
      </ul>
    </div>
    </>
  )
}

