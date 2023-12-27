import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";
import Container from "../Container/Container";
import { BsCartFill } from "react-icons/bs";
import { useCart } from "../../context/CartProvider";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const handleCartModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    console.log("showModal value changed", showModal);
    if (showModal) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [showModal]);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>Retro Store</h1>
          <button className={styles.showcartBtn} onClick={handleCartModal}>
            <span className={styles.cartIconandNumber}>
              <BsCartFill />
              {!!totalQuantity && (
                <span className={styles.number}>{totalQuantity}</span>
              )}
            </span>
            <span>Cart</span>
          </button>
        </nav>
      </Container>
      {showModal && (
        <Modal>
          <Cart handleCartModal={handleCartModal} />
        </Modal>
      )}
    </header>
  );
}

export default Header;
