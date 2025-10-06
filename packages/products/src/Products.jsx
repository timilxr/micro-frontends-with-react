import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";



export default function Products() {
    return <div>
        <Routes>
            <Route index element={<ProductList />} />
            <Route path="/:id" element={<ProductDetail />} />
        </Routes>
    </div>;
}