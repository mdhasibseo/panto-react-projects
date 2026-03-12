import { p, text } from "framer-motion/client";
import React from "react";

const WhyChoosingUs = () => {
  const texts = [
    {
      title: "Luxury facilities",
      p: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
    },
    {
      title: "Affordable Price",
      p: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    },
    {
        title: "Many Choices",
        p: "We provide many different workspace to choose from and you can select the one that best suits your needs and preferences."
    }
  ];
  return (
    <section className="container mx-auto px-4 py-28 ">
      <div className="md:flex space-y-12" >
        <div className="flex justify-center items-center mr-24 ">
          <h2 className="text-5xl font-bold ">Why Choosing Us</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6   ">
            {
                texts.map((text, index)=> (
                    <div key={index} className="space-y-4  mx-auto">
                        <h3 className="font-semibold text-2xl">{text.title}</h3>
                        <p>{text.p}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default WhyChoosingUs;
