import React, { useContext, useState } from "react";
import products from "../utilis/product";
import { getimg } from "../utilis/ImgGetting";
import Rating from "../utilis/Rating";
import { FaPlusCircle } from "react-icons/fa";
import  btnArrow from "../assets/button-icon.png"
import { motion, } from "framer-motion"
import { CartContext } from "../context/CartContext";

const Products = ({ title }) => {
  const subMenu = ["Chair", " Beds", " Sofa", " Lamp"];
  const [active, setActive] = useState(0);
  const [category, setCategory] = useState("Chair");
  const [selectedProduct, setSelectedProduct] = useState(4);

  // cart add section
  const { addToCart} = useContext(CartContext);
  
//   product increse section  for view all button
  const handleViewAll = () => {
    setSelectedProduct((prev)=> prev + 4);
  };
  
  // text animation for product title
   const textAnimation= (text, className) => {
      return text.split("").map((char,index) => (
        <motion.span
          key={index}
          className={className}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))
    }

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  return (
    <section className="container mx-auto ">
      {/* shop title  */}
      <h2 className="text-3xl text-center font-bold  text-base-content mb-4 py-12">
       {textAnimation(title)} 
      </h2>

      {/* sub menu for product cetegory  */}

      <div className="bg-[#EEEEEE]  md:max-w-[384px] mx-auto rounded-full flex items-center justify-center px-2 ">
        {subMenu.map((item, index) => (
          <button
            key={index}
           onClick={() => (setActive(index), setCategory(item.trim()))}
            className={`px-4 py-2 m-2 text-black bg-gray-200 rounded-4xl hover:bg-white click:bg-blue-500 transition duration-300 cursor-pointer ${active === index ? "bg-white" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>
      {/* product section  */}
      <div

      
      
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-8 lg:gap-8 px-3 pt-10 ">
        {/* Product items would go here */}
        {filteredProducts.slice(0, selectedProduct).map((item, index) => (
          <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{opacity:1, y:0}}
          transition={{delay:index * 0.2, duration: 0.5}}
          
          
          key={item.id} className="bg-white rounded-lg  shadow-md  mx-auto">
            <div className="bg-base-200 overflow-hidden ">
              <img
                src={getimg(`${item.imageUrl}`)}
                alt={item.name}
                className=" object-cover mb-4"
              />
            </div>

            <div className="p-4">
              <p className="text-gray-400">{item.category}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <Rating rating={item.rating} />
              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600">${item.price}</p>
                <button onClick={() => addToCart(item)}>
                  <FaPlusCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {
        filteredProducts.length<selectedProduct ? "" : <div className="flex justify-center items-center py-12">
       <button onClick={handleViewAll} className="hover:underline hover:text-[#E58411]  transition-colors cursor-pointer flex justify-center items-center " >View All <span className="ml-2"><img src={btnArrow} alt="Arrow" /></span></button>
      </div>
      }
      

    </section>
  );
};

export default Products;
