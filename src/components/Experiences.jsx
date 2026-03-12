
import React from 'react'
import expic from "../assets/expricences.png"
import  btnArrow from "../assets/button-icon.png"

const Experiences = () => {
  return (
    <section className='my-20 container mx-auto  '>
        <div className="hero flex justify-center items-center px-5"> 
  <div className=" flex flex-col lg:flex-row justify-between items-center">
    <img
      src={expic}
      
    />
    <div className='mx-auto lg:ml-20'>
        <p className='uppercase text-[#E58411]'>experiences</p>
      <h3 className="text-5xl font-bold max-w-lg">we provide you the best experience</h3>

      <p className="py-6 max-w-139">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="hover:underline hover:text-[#E58411]  transition-colors cursor-pointer flex justify-center items-center " >View All <span className="ml-2"><img src={btnArrow} alt="Arrow" /></span></button>
    </div>
  </div>
</div>
    </section>
  )
}

export default Experiences