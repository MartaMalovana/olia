"use client";
import { useState } from "react";
import Image from "@/node_modules/next/image";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./styles.module.scss";
import data from "./olia.json";
import arrowOpen from "../icons/arrow-open.svg";
import bottle from "../icons/bottle.svg";
import plus from "../icons/plus.svg";
import minus from "../icons/minus.svg";

export default function Page() {
  const [id, useId] = useState<number[]>([]);
  const [amount, useAmount] = useState(1);
  const [productId, useProductId] = useState(0);
  const [basket, useBasket] = useState([]);

  const openInfo = (prodId: number) => {
    if (!id.includes(prodId)) {
      useId((el) => [...el, prodId]);
      useProductId(prodId);
    } else {
      useId((el) => el.filter((a) => Number(a) !== Number(prodId)));
    }
  };

  const changeAmount = (action: string) => {
    if (action === "increment") useAmount(amount + 1);
    if (action === "decrement") {
      amount > 1 && useAmount(amount - 1);
    }
  };

  const addProduct = (event) => {
    event.preventDefault();
    console.log(event);
    let size = [...Object.values(event.target.form)].find(
      (e) => e.checked
    ).value;
    const newProduct = {
      collection: "olia",
      "product-id": productId,
      size: size,
      amount: amount,
    };
    useBasket((data: array) => [...data, newProduct]);
  };

  return (
    <div className={styles.products}>
      <Header />

      <main className={styles.main}>
        {/* Product list */}
        <ul className={styles.product_list}>
          {data.map((product) => (
            /* Product item */
            <li
              className={
                id.includes(product.id)
                  ? `${styles.product_item} ${styles.product_item_active}`
                  : styles.product_item
              }
              key={product.id}
            >
              {/* Product preview (product icon and name) */}
              <div
                className={
                  id.includes(product.id)
                    ? `${styles.product_preview} ${styles.product_preview_active}`
                    : styles.product_preview
                }
                onClick={() => openInfo(product.id)}
              >
                {/* Product icon */}
                <Image
                  className={styles.icon}
                  src={`/images/product-icons/${product.icon}`}
                  width={70}
                  height={70}
                  alt="product icon"
                ></Image>
                {/* Product name */}
                <p className={styles.product_name}>{product.name}</p>
                {/* Arrow down to open the product info */}
                <Image
                  className={
                    id.includes(product.id)
                      ? `${styles.arrow_open} ${styles.arrow_open_active}`
                      : styles.arrow_open
                  }
                  src={arrowOpen}
                  width={35}
                  height={35}
                  alt="arrow down"
                ></Image>
              </div>
              {/* Product info (photo, description and the form to add product to basket) */}
              {id.includes(product.id) && (
                <div className={styles.product_info}>
                  {/* Container with product photo and form to choose product */}
                  <div className={styles.photo_form_container}>
                    {/* Product photo*/}
                    <Image
                      src={`/images/product-photos/${product.photo}`}
                      width={100}
                      height={100}
                      className={styles.photo}
                      alt="product photo"
                    ></Image>
                    {/* Product form to choose product options and add to basket*/}
                    <form className={styles.form}>
                      {/* Product sizes option*/}
                      <div className={styles.sizes_container}>
                        {product.size.map(([size, price], index) => (
                          <label className={styles.sizes_item}>
                            <input
                              type="radio"
                              name="bottle-size"
                              value={size}
                              className={styles.size_input}
                              defaultChecked={index === 0 ? true : false}
                            ></input>
                            <div className={styles.size_button}>
                              <Image
                                className={styles.bottle}
                                src={bottle}
                                width={30 + index * 7}
                                alt="bottle icon"
                              ></Image>
                            </div>
                            <p>{size} мл</p>
                            <p>{price} грн</p>
                          </label>
                        ))}
                      </div>
                      {/* Product amount option (buttons to change amount)*/}
                      <label>
                        <input
                          type="text"
                          name="amount"
                          value={amount}
                          className={styles.amount_input}
                        ></input>
                        <div className={styles.buttons_container}>
                          <button
                            type="button"
                            onClick={() => changeAmount("decrement")}
                          >
                            <Image
                              src={minus}
                              width={15}
                              height={15}
                              alt="minus one product"
                            ></Image>
                          </button>
                          <span>{amount}</span>
                          <button
                            type="button"
                            onClick={() => changeAmount("increment")}
                          >
                            <Image
                              src={plus}
                              width={15}
                              height={15}
                              alt="add one product"
                            ></Image>
                          </button>
                        </div>
                      </label>
                      {/* Submit button to add chosen product to basket*/}
                      <button
                        type="submit"
                        className={styles.submit_button}
                        onClick={addProduct}
                      >
                        Додати до кошика
                      </button>
                    </form>
                  </div>
                  {/* Product description */}
                  <p className={styles.product_description}>
                    {product.description}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
