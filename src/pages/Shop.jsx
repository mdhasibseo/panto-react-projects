import React from "react";
import banner from "../assets/banner.png";
import Products from "../components/Products";
import { motion, } from "framer-motion"

const Shop = () => {
    // text animation function
    const textAnimation= (text, className) => {
        return text.split("").map((char,index) => (
          <motion.span
            key={index}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))
      }
  return (
    <section className="bg-cover  bg-center w-full  "
    >
        <div
        style={{ backgroundImage: `url(${banner})` }}
        className='text-center  bg-cover  bg-center w-full h-100 pt-28 lg:pt-40'>
          
        <h1 className="text-4xl font-bold text-white mb-4">
          {textAnimation("Welcome to Our Shop", "text-4xl font-bold text-white mb-4")}
        </h1>
        </div>
        <Products title="Our Products" />
    </section>
  );
};

export default Shop;
