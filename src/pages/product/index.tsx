import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
}

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [products, setProducts] = useState([])
    const { push } = useRouter()
    useEffect(() => {
        if (!isLogin) {
            push('/auth/login')
        }
    }, [])

    useEffect(() => {
        fetch('/api/product')
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                setProducts(response.data)
            });
    }, [])

    return (
        <div>
            <h1>Product Page</h1>
            {products.map((product: productType, index: number) => (
                <div key={product.id}>
                    <p>{index + 1}. {product.name}</p>
                    <p>Price: ${product.price}</p>
                    <p>Size: {product.size}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductPage