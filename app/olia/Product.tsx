import { useState } from "react";
import Image from "@/node_modules/next/image";
import styles from "./styles.module.scss";
import arrowOpen from "../icons/arrow-open.svg";
import bottle from "../icons/bottle.svg";
import plus from "../icons/plus.svg";
import minus from "../icons/minus.svg";

export default function Product({ product }) {
  const [showInfo, useShowInfo] = useState(false);
  const [amount, useAmount] = useState(1);
  const [productId, useProductId] = useState(0);
  const [basket, useBasket] = useState([]);

  const addProduct = (event) => {
    event.preventDefault();
    //   console.log(event);
    //   let size = [...Object.values(event.target.form)].find(
    //     (e) => e.checked
    //   ).value;
    //   const newProduct = {
    //     collection: "olia",
    //     "product-id": productId,
    //     size: size,
    //     amount: amount,
    //   };
    //   useBasket((data: array) => [...data, newProduct]);
  };

  return (
    <li
      className={
        showInfo
          ? `${styles.product_item} ${styles.product_item_active}`
          : styles.product_item
      }
      key={product.id}
    >
      {/* Product preview (product icon and name) */}
      <div
        className={
          showInfo
            ? `${styles.product_preview} ${styles.product_preview_active}`
            : styles.product_preview
        }
        onClick={() => useShowInfo(!showInfo)}
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
            showInfo
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
      {showInfo && (
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
                  <label className={styles.sizes_item} key={size}>
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
                    disabled={amount === 1 && true}
                    onClick={() => useAmount(amount - 1)}
                  >
                    <Image
                      src={minus}
                      width={15}
                      height={15}
                      alt="minus one product"
                    ></Image>
                  </button>
                  <span>{amount}</span>
                  <button type="button" onClick={() => useAmount(amount + 1)}>
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
          <p className={styles.product_description}>{product.description}</p>
        </div>
      )}
    </li>
  );
}
