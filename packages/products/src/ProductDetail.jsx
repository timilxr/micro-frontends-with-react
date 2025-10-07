import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "./ProductList";

export default function ProductDetail({ viewedProduct }) {
    const { id } = useParams();
    const product = DUMMY_PRODUCTS.find(p => p.id === parseInt(id));

    useEffect(() => {
        if(product) viewedProduct(product);
    }, [product]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (<div>
        <h2>Product Detail</h2>
        <p>Details for product ID: {id}</p>
    </div>);
}