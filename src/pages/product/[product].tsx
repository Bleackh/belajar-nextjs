import { useRouter } from "next/router";

const DetailProductPage = () => {
    const {query} = useRouter();
    // console.log(router);
    return (
        <div>
            <h1>Detail Product Page</h1>
            <p>Product : {query.product}</p>
        </div>
    )
}

export default DetailProductPage