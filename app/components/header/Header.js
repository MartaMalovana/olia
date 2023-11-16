import Image from "next/image";
import Spin from "hamburger-react";
import { useState } from 'react';
import styles from "../../styles/styles.module.scss";
import basket from "../../icons/basket-2.svg";
import Menu from '../menu/Menu.js';

export default function Header({ basketItems = 0 }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <p className={styles.emblem}>FAYNOLIA</p>
                <button className={styles.basket} >
                    <Image
                        src={basket}
                        width={25}
                        height={25}
                        alt="Product basket"
                        style={{ stroke: "#fff" }}
                    ></Image>
                    <div className={styles.product_amount}>{basketItems}</div>
                </button>
                <div onClick={() => setMenuOpen(!menuOpen)}><Spin size={24}></Spin></div>
            </div>
            {menuOpen && <Menu />}
        </header>
    );
};