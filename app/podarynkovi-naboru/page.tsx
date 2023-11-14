"use client";
import styles from "./styles.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Page() {
  return (
    <div className={styles.container}>
      <Header />

      <p style={{ textAlign: "center" }}>
        Упс... Над цією сторіночкою я ще працюю!{" "}
      </p>
      <p style={{ textAlign: "center" }}>Тут будУТЬ ПОДАРУНКОВІ НАБОРИ</p>

      <Footer />
    </div>
  );
}
