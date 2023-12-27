import React from "react";
import { useCart } from "../../context/CartProvider";
import CartItem from "./CartItem";
import styles from "./cart.module.css";
import { ImCross } from "react-icons/im";

function Cart({ handleCartModal }) {
  const { cart, addItemtoCart } = useCart();
  console.log(cart, addItemtoCart);

  let totalAmount = 0;
  // for (let item of cart) {
  //   totalAmount += item.price * item.quantity;
  // }

  totalAmount = cart.reduce((acc, currItem) => {
    return acc + currItem.price * currItem.quantity;
  }, 0);

  if (cart.length === 0)
    return (
      <>
        <div className={styles.cart}>
          <h1>No Items Found</h1>{" "}
          <button className={styles.closeCartBtn} onClick={handleCartModal}>
            <ImCross />
          </button>
        </div>
      </>
    );
  return (
    <>
      <div className={styles.cart}>
        <h1>Shopping Cart</h1>

        <div className={styles.cartHeading}>
          {cart && cart.map((item) => <CartItem {...item} key={item.id} />)}
        </div>

        <button className={styles.closeCartBtn} onClick={handleCartModal}>
          <ImCross />
        </button>

        <h4>Total Amount : &#8377;{totalAmount}</h4>
      </div>
    </>
  );
}

export default Cart;
