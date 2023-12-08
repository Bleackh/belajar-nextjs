import styles from "@/styles/404.module.scss";
import Image from "next/image";
import image404 from "../../public/404.svg";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <Image src={image404} alt="404 Belajar Next.JS"
                sizes="500px"
                // Make the image display full width
                style={{
                    width: '30%',
                    height: 'auto',
                }}
            />
            {/* <img className={styles.error__image} src="/404.svg" alt="404 Belajar Next.JS" /> */}
            <p>404 | Halaman Tidak Ditemukan</p>
        </div>
    )
};

export default Custom404;