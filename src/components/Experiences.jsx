
import React from 'react'
import expic from "../assets/expricences.png"
import  btnArrow from "../assets/button-icon.png"
import { motion, } from "framer-motion"

const Experiences = () => {
  return (
    <section className='my-20 container mx-auto  '>
        <div className="hero flex justify-center items-center px-5"> 
  <div className=" flex flex-col lg:flex-row justify-between items-center">
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
      src={expic}
      
    />

    </motion.div>
    
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    
    className='mx-auto lg:ml-20'>
        <p className='uppercase text-[#E58411]'>experiences</p>
      <h3 className="text-5xl font-bold max-w-lg">we provide you the best experience</h3>

      <p className="py-6 max-w-139">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="hover:underline hover:text-[#E58411]  transition-colors cursor-pointer flex justify-center items-center " >View All <span className="ml-2"><img src={btnArrow} alt="Arrow" /></span></button>
    </motion.div>
  </div>
</div>
    </section>
  )
}

export default Experiences