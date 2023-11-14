import Image from "next/image";
import Link from "@/node_modules/next/link";
import styles from '../../styles/styles.module.scss';
import olia from '../../icons/oil-black.svg';
import flour from '../../icons/flour-black.svg';
import zhmuh from '../../icons/zhmuh-black.svg';
import present from '../../icons/present-black.svg';
import main from '../../icons/main.svg';
import dostavka from '../../icons/dostavka.svg';
import komanda from '../../icons/komanda.svg';

export default function Menu() {

    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href='/'>
                        <div>
                            <Image src={main} width={17} height={20} alt="icon oil" style={{ marginRight: "15px" }}></Image>
                            Головна
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='olia'>
                        <div>
                            <Image src={olia} width={20} height={20} alt="icon oil" style={{ marginRight: "15px" }}></Image>
                            Олія
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='boroshno'>
                        <div>
                            <Image src={flour} width={20} height={20} alt="icon oil" style={{ marginRight: "15px" }}></Image>
                            Борошно
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='zhmuh'>
                        <div>
                            <Image src={zhmuh} width={20} height={20} alt="icon oil" style={{ marginRight: "15px" }}></Image>
                            Жмих
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='podarynkovi-naboru'>
                        <div>
                            <Image src={present} width={20} height={20} alt="icon oil" style={{ marginRight: "15px" }}></Image>
                            Подарункові набори
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='dostavka-oplata'>
                        <div>
                            <Image src={dostavka} width={20} height={20} alt="icon oil" style={{ marginRight: "15px" }} ></Image>
                            Доставка та оплата
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='kontaktu'>
                        <div>
                            <Image src={komanda} width={18} height={20} alt="icon oil" style={{ marginRight: "15px" }}></Image>
                            Про нас
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

