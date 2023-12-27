import React from "react";
import styles from "./product.module.css";
import { useCart } from "../../context/CartProvider";
import { toast } from "react-toastify";

function Product({ id, title, price, img }) {
  const { cart, addItemtoCart } = useCart();

  const handleAdd = () => {
    console.log("handle add called");

    for (let item of cart) {
      if (item.id === id) {
        alert("Item Already added to cart");
        return;
      }
    }
    const newCartItem = {
      id: id,
      price: price,
      title: title,
      img: img,
      quantity: 1,
    };
    addItemtoCart(newCartItem);
    toast.info("Item Added!");
  };
  return (
    <div className={styles.product}>
      <img src={img} alt={`image_${title}`} className={styles.productImage} />
      <p className={styles.title}> Title : {title}</p>
      <p className={styles.price}> Price : {price} &#8377;</p>
      <button onClick={handleAdd} className={styles.addToCartBtn}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
