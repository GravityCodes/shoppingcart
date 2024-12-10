import localforage, { iterate } from "localforage"

let productsInCart = {};
updateCart()

export const placeItemInCart = async (key, value) => {
  try {
    const getValue = await localforage.getItem(key);

    if (await getValue == null){
      localforage.setItem(key, value);
      updateCart()
    }
    else {
      // increase the amount stored in cart of a product
      localforage.setItem(key, {...getValue, quantity: getValue.quantity + 1} )
      updateCart()
    }
  } catch (err) {
    console.log(err);
    console.log("this was an error")
  }

  
}

function updateCart() {
  productsInCart = {};
  localforage.iterate((value, key) => {
    productsInCart[key] = value;
    console.log(key)
  }).then(() => console.log(productsInCart))
    .catch(err => console.log(err));

}