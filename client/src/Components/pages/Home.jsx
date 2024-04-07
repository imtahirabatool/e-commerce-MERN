import React from "react";
import BottomHeader from "../Header/BottomHeader";
import HeroSection from "../Home/HeroSection";
import PopularProducts from "../Home/PopularProducts";
import BestSellerProducts from "../Home/BestSellerProducts";
import Layout from "../common/Layout";

const Home = () => {
  return (
    <Layout>
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
    </Layout>
  );
};

export default Home;
