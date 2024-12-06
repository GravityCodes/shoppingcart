import PropTypes from 'prop-types'
import styles from "./CategoryButton.module.css"
import electronicsImg from "../../assets/imgs/electronics.jpeg"
import jewerelyImg from "../../assets/imgs/jewelery.jpeg"
import menClothingImg from "../../assets/imgs/men-clothing.jpeg"
import womenClothingImg from "../../assets/imgs/women-clothing.jpeg"


export const CategoryButton = (props) => {

  // Choose the image based on the name of the category
  const useImage = (imgName) => {
    
    switch(imgName){
      case "electronics":
        return electronicsImg;
      case "jewelery":
        return jewerelyImg;
      case "men's clothing":
        return menClothingImg
      case "women's clothing":
        return womenClothingImg
      default:
        return "no image found";
    }
  }

  return(
    <div className={styles["category-button"]}>
      <div className={styles["img-wrapper"]}>
        <img src={useImage(props.name)} alt="" />
      </div>

      <p>{props.name}</p>
    </div>
  )
}

CategoryButton.propTypes = {
  name: PropTypes.string.isRequired,
};