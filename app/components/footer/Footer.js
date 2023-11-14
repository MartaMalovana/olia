import Image from "next/image";
import Link from "@/node_modules/next/link";
import styles from "../../styles/styles.module.scss";
import drop from "../../icons/drop.png";
import instagram from "../../icons/instagram.svg";
import facebook from "../../icons/facebook.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_drop}>
                    <Image src={drop} width={30} height={30} alt="oil drop decor"></Image>
                </div>
                <div className={styles.footer_contacts}>
                    <div className={styles.social_container}>
                        <Image
                            src={facebook}
                            width={27}
                            height={27}
                            className={styles.facebook}
                        ></Image>
                        <Image
                            src={instagram}
                            width={30}
                            height={30}
                            className={styles.instagram}
                        ></Image>
                    </div>
                    <a href="mailto:#">olia@gmail.com</a>
                    <a href="tel:+380670676756">+380670676756</a>
                </div>
                <div className={styles.footer_links}>
                    <Link href="kontaktu">Про нас</Link>
                    <Link href="dostavka-oplata">Доставка та оплата</Link>
                </div>
            </div>
        </footer>
    );
};