import ProductView from '@/views/product';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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
                // console.log(response)
                setProducts(response.data)
            });
    }, [])

    return (
        <div>
            <ProductView products={products} />
        </div>
    )
}

export default ProductPage