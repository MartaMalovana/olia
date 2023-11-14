import styles from "../../styles/styles.module.scss";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "@/public/images/reklama/one.png";
import two from "@/public/images/reklama/two.jpg";
import three from "@/public/images/reklama/three.jpg";

export default function Slider() {
    return (
        <div className={styles.slider_container}>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
            >
                <div className={styles.slider_item}>
                    <Image src={one}></Image>
                </div>
                <div className={styles.slider_item}>
                    <Image src={two}></Image>
                </div>
                <div className={styles.slider_item}>
                    <Image src={three}></Image>
                </div>
            </Carousel>
        </div>
    );
}