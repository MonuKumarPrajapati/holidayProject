import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
// import React {useEffect} from 'react'

const ProductPage = () => {
  const [products, setProducts] = useState(null);
  // console.log(products);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response?.data);
      // console.log(response.data);
    };
    fetchProducts();
  }, []);

  const lastProductIdx = currentPage * productPerPage;
  const firstProductIdx = lastProductIdx - productPerPage;

  const currentProduct = products?.slice(firstProductIdx, lastProductIdx);
  return (
    // <ProductCard products={products}/>
    <>
      {" "}
      <ProductCard products={currentProduct} />
      <Pagination totalProduct={products?.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default ProductPage;
