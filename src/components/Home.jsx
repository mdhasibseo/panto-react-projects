import React from "react";
import banner from "../assets/banner.png";
import {motion} from "framer-motion"
import Hero from "./Hero";
import WhyChoosingUs from "./WhyChoosingUs";
import Products from "./Products";
import Experiences from "./Experiences";
import Complex from "./Complex";
import Testimonials from "./Testimonials";


const Home = () => {
 
  return (
   <section>
    <Hero />
    <WhyChoosingUs />
    <Products title="Best Selling Product" />
    <Experiences />
    <Complex />
    <Testimonials/>
   </section>
  );
};

export default Home;
