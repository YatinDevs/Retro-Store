import React from "react";
import { products } from "../../data/products";
import Product from "./Product";
import styles from "./products.module.css";
import Container from "../Container/Container";

function Products() {
  return (
    <Container>
      <h1>Best Sellers of Retro</h1>
      <div className={styles.products}>
        {products &&
          products.map((product) => <Product key={product.id} {...product} />)}
      </div>
    </Container>
  );
}

export default Products;
