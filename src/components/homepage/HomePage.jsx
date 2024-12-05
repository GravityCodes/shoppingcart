import styles from "./HomePage.module.css"
import heroImg from "../../assets/hero-background.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <>
      <h1>Fordly</h1>

      <div>
        <img src={heroImg} alt="" />
        <p>Reasonable products for Reasonable prices</p>
        <Link to={"/shop"}> Start Shopping</Link>
      </div>
    </>
  )
}