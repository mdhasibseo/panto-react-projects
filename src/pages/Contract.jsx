import React from 'react'
import banner from "../assets/contact-background.jpg";
import { motion, } from "framer-motion"


import Complex from '../components/Complex';

const Contract = () => {
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
     <section className="  bg-center w-full  "
    >
        <div
        style={{ backgroundImage: `url(${banner})` }}
        className='w-full lg:h-120 h-80 bg-no-repeat bg-cover flex items-center justify-center
text-white text-center   pt-28 lg:pt-40'>
          
        <h1 className="text-4xl font-bold text-white mb-4">
          {textAnimation("Contact Us", "text-4xl font-bold text-white mb-4")}
        </h1>
        </div>
        <Complex/>
    </section>
  )
}

export default Contract