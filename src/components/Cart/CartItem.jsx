import React from "react";
import styles from "./cartItem.module.css";
import { useCart } from "../../context/CartProvider";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
function CartItem({ id, price, img, title, quantity }) {
  const { increaseQuantity, decreaseQuantity, removeItemfromCart } = useCart();
  return (
    <div className={styles.cartItem}>
      {/* left  */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}>
          <img src={img} alt={title} className={styles.cartImage} />
        </div>
        <h3>{title}</h3>
      </div>
      {/* right  */}
      <div className={styles.otherControls}>
        <div className={styles.qtyInput}>
          <button
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              decreaseQuantity(id);
            }}
          >
            <AiOutlineMinus />
          </button>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <button
            onClick={() => {
              increaseQuantity(id);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <p> &#8377;{price * quantity}</p>
        <button
          className={styles.removeItemBtn}
          onClick={() => {
            removeItemfromCart(id);
          }}
        >
          <ImCross />
        </button>
      </div>
      {/* ----------------- old ------------  */}
    </div>
  );
}

export default CartItem;
