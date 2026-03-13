import React from "react";
import banner from "../assets/banner.png";
import Products from "../components/Products";

const Shop = () => {
  return (
    <section className="bg-cover  bg-center w-full  "
    >
        <div
        style={{ backgroundImage: `url(${banner})` }}
        className='text-center  bg-cover  bg-center w-full h-100 pt-28 lg:pt-40'>
          
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Shop</h1>
        </div>
        <Products title="Our Products" />
    </section>
  );
};

export default Shop;
