"use client";
import { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Product from "./Product";
import styles from "./styles.module.scss";
import data from "./olia.json";

export default function Page() {
  return (
    <div className={styles.products}>
      <Header />

      <main className={styles.main}>
        {/* Product list */}
        <ul className={styles.product_list}>
          {data.map((product) => (
            /* Product item */
            <Product product={product} />
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
