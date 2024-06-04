import React from 'react';

const categoryItems = [
  { id: 1, title: "Main Dish", desc: "(86 dishes)", image: "src/assets/categoryImage/img1.png" },
  { id: 2, title: "Breakfast", desc: "(12 dishes)", image: "src/assets/categoryImage/img2.png" }, // Corrected typo
  { id: 3, title: "Dessert", desc: "(42 dishes)", image: "src/assets/categoryImage/img3.png" },
  { id: 4, title: "Browse All", desc: "(221 items)", image: "src/assets/categoryImage/img4.png" },
];

const Categories = () => {
  return (
    <div className='sectionContainer'>
      <div className='text-center'>
        <p className='subTitle mt-2'>Customer Favorites</p>
        <h2 className='title'>Popular Categories</h2>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap gap-1 justify-around items-center mt-12'>  
        {categoryItems.map((item, index) => (
          <div key={index} 
          className=' shadow-sm  flex  items-center justify-center flex-col  rounded-md bg-slate-100 py-6 px-5 
          w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all  '>  
          <div className=" mx-auto ">
          <img src={item.image} alt={item.title}  
            className='bg-[#ffb1a8] p-5 w-28 rounded-full h-28  '/> 
          </div>
  
            <div className="text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
