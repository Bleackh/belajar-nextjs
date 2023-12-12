import styles from "./product.module.scss"

type productType = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
}

const ProductView = ({ products }: { products: productType[] }) => {
    return (
        <div className={styles.product}>
            <h1 className={styles.product__title}>Product</h1>
            <div className={styles.product__content}>
                {products.map((product: productType, index: number) => (
                    <div key={product.id} className={styles.product__content__item}>
                        <div className={styles.product__content__item__image}>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h4 className={styles.product__content__item__name}>{product.name}</h4>
                        <p className={styles.product__content__item__category}>{product.category}</p>
                        <p className={styles.product__content__item__price}>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductView