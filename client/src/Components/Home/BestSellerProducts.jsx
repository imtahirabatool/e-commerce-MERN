import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Row from "../common/Row";
import ProductCard from "./ProductCard";
import client from "../../apis";
import apiEndpoints from "../../apis/endpoint";

const BestSellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Function to fetch categories and products
  const getData = async () => {
    try {
      // Fetch categories
      const responseCat = await client.get(apiEndpoints.categories);
      setCategories(responseCat.data);

      // Fetch products initially
      handleGetProducts();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to fetch products based on category ID
  const handleGetProducts = async (cid) => {
    try {
      // Fetch products with optional category ID
      const response = await client.get(apiEndpoints.products(12, cid));
      setProducts(response.data.docs);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Use useEffect to fetch data initially and whenever getData changes
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <h1 className="w-full text-center text-3xl uppercase mb-8 text-black font-semibold mt-20">
        Best Seller Products
      </h1>
      <Row className="items-center">
        <p className="text-base mr-8 cursor-pointer font-bold text-black hover:text-gray-700">
          All Products
        </p>
        {/* Render category links */}
        {categories.map((item) => (
          <p
            onClick={() => handleGetProducts(item._id)}
            className="text-base mr-8 cursor-pointer text-gray-600 hover:text-gray-700"
            key={item._id}
          >
            {item.title}
          </p>
        ))}
      </Row>
      <Row className="flex-wrap gap-1 mt-8">
        {/* Render product cards */}
        {products.map((item) => (
          <div className="w-1/4 mb-5" key={item._id}>
            <ProductCard data={item} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellerProducts;
