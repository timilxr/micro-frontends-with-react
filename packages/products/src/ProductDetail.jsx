import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
  return (<div>
    <h2>Product Detail</h2>
    <p>Details for product ID: {id}</p>
  </div>);
}