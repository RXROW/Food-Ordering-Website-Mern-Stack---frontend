import React from "react";
import bunnur from "../../assets/bunner.jpg";
import Categories from "./Categories";
import SpacialDishes from "./SpacialDishes";
import Testimonials from "./Testimonials";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-slate-100">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            className="rounded-xl max-w-full mb-6"
            src={bunnur}
            alt="Banner"
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delight Of Delectable{" "}
            <span className="text-rose-700">Food!</span>
          </h2>
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi omnis
            tempora quae.
          </p>
          <button className="btn bg-rose-700 hover:bg-rose-800 rounded-full text-yellow-50">
            Order Now
          </button>
        </div>
      </div>
    </div>
    <Categories/>
    <SpacialDishes/>
    <Testimonials/>
    <OurServices/>
  
    </>
  );
};

export default Home;
