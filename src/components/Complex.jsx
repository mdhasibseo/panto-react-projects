import React from "react";
import btnArrow from "../assets/button-icon.png";
import metarial from "../assets/material1.png";
import metarial1 from "../assets/material2.png";
import metarial2 from "../assets/material3.png";

const Complex = () => {
  return (
    <section className="my-20 container mx-auto  ">
      <div className="hero flex justify-center items-center px-5">
        <div className=" flex flex-col lg:flex-row justify-between items-center md:flex-col-reverse">
          <div className="mx-auto ">
            <p className="uppercase text-[#E58411]">Materials</p>
            <h3 className="text-5xl font-bold max-w-lg">
              Very serious materials for making furniture
            </h3>

            <p className="py-6 max-w-139">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <button className="hover:underline hover:text-[#E58411]  transition-colors cursor-pointer flex justify-center items-center ">
              View All{" "}
              <span className="ml-2">
                <img src={btnArrow} alt="Arrow" />
              </span>
            </button>
          </div>
          <div className="grid grid-re grid-cols-2  md:w-1/2 md:grid-cols-3 md:items-end pt-10 items-center">
            <div className=" ">
              {/* left column - 2 small images */}
              <div>
                <img className="object-cover" src={metarial} alt="" />
              </div>
              <div>
                <img className="object-cover" src={metarial1} alt="" />
              </div>
            </div>
            {/* right column - 1 large image */}
            <div className="md:col-span-2 col-span-1">
              <img className="object-cover" src={metarial2} alt="" />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Complex;
