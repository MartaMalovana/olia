"use client";
import { useState } from "react";
import Link from "@/node_modules/next/link";
import styles from "./styles/styles.module.scss";
import Image from "next/image";
import oil from "./icons/oil.svg";
import flour from "./icons/flour.svg";
import zhmuh from "./icons/zhmuh.svg";
import present from "./icons/present.svg";
import drop from "./icons/drop.png";
import { caveat } from "./styles/fonts.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Slider from "./components/slider/Slider.js";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main_container}>
        {/* Drop and welcome text */}
        <div className={styles.drop}>
          <Image src={drop} width={50} height={50} alt="Oil drop"></Image>
          <p className={caveat.className}>
            &quot;Виготовляємо олію під замовлення. Тому вона завжди свіжа та
            преміум якості!&quot;
          </p>
        </div>

        {/* Slider */}
        <Slider />

        {/* Product sections */}
        <div className={styles.section_list}>
          <Link href="olia" className={styles.section}>
            <Image
              src={oil}
              width={40}
              height={40}
              alt="Link to page with oils"
            ></Image>
            <p className={styles.section_name}>Олія</p>
          </Link>
          <Link href="boroshno" className={styles.section}>
            <Image
              src={flour}
              width={40}
              height={40}
              alt="Link to page with flours"
            ></Image>
            <p className={styles.section_name}>Борошно</p>
          </Link>
          <Link href="zhmuh" className={styles.section}>
            <Image
              src={zhmuh}
              width={40}
              height={40}
              alt="Link to page with oil cake"
            ></Image>
            <p className={styles.section_name}>Жмих</p>
          </Link>
          <Link href="podarynkovi-naboru" className={styles.section}>
            <Image
              src={present}
              width={40}
              height={40}
              alt="Link to page with present sets"
            ></Image>
            <p className={styles.section_name}>Подарункові набори</p>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
