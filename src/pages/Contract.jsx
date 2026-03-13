import React from 'react'
import banner from "../assets/contact-background.jpg";


import Complex from '../components/Complex';

const Contract = () => {
  return (
     <section className="  bg-center w-full  "
    >
        <div
        style={{ backgroundImage: `url(${banner})` }}
        className='w-full lg:h-120 h-80 bg-no-repeat bg-cover flex items-center justify-center
text-white text-center   pt-28 lg:pt-40'>
          
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        </div>
        <Complex/>
    </section>
  )
}

export default Contract