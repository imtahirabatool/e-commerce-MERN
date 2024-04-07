import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Row from "../common/Row";
import { Link } from "react-router-dom";
import apiEndpoints from "../../apis/endpoint";
import client from "../../apis";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await client.get(apiEndpoints.products());
      setProducts(response.data.docs);
    } catch (error) {
      console.log("ERROR:", error.response?.data || "An error occurred while fetching data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-black">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[648px] relative w-[52px]">
          <p className="text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <Link to={`/product/${products[0]?._id}`}>
          <img
            className="w-[648px] h-[648px] object-cover cursor-pointer"
            src={products[0]?.img ?? 'default-image-url'}
            alt="top product"
          />
        </Link>
        <Row className="flex-wrap gap-[24px] w-1/2">
          {products.slice(1).map((item, idx) => (
            <Link
              to={`/product/${item._id}`}
              className="w-[46%] h-[324px]"
              key={item._id}
            >
              <img
                src={item.img ?? 'default-image-url'}
                alt={item.title}
                className="w-[324px] h-full object-cover"
              />
            </Link>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;
