import React from 'react'
import banner from "../assets/banner.png";
import {motion} from "framer-motion"

const Hero = () => {
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
    <section
      className="bg-cover bg-center w-full h-screen text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="pt-40">
        <h1 className="text-center px-10 max-w-4xl mx-auto">
         {textAnimation(" Make your interior more minimalistic & modern" , "text-white md:text-6xl text-2xl font-bold  ")}
        </h1>
        <motion.p
        initial={{y:100, opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{
          duration:0.5
        }}
        
        className="md:text-2xl px-2 text-center max-w-lg mx-auto md:pt-14 pt-5">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </motion.p>
        <motion.div 
        initial={{opacity:0, y:80}}
        animate={{opacity:1, y:0}}
        transition={{
          duration:1
        }}
        
        className="flex justify-center px-10 md:pt-14 pt-5 text-white  ">
          <label className="input bg-transparent  backdrop-blur-lg border border-white rounded-4xl  p-6 ">
            
            <input className="p-4 " type="search"  placeholder="Search furniture" />
            <div className="bg-[#E58411] p-3 -mr-2 rounded-full">
                <svg 
              className="h-[1em] opacity-100  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            </div>

          
          </label>
        </motion.div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-1/4   bg-gradient-to-t from-white/80 vai-transparent to-transparent'></div>

    </section>
  );
  
}

export default Hero