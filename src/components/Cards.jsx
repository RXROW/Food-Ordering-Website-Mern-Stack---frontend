import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
 const [isHeartFilled ,setIsHeartFilled] = useState(false);
 const HandleHeartClick=() =>{
  setIsHeartFilled(!isHeartFilled)
 }


return (
<div className="card card-compact w-96 bg-base-100 shadow-xl custmMedia">
  <div 
  className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-rose-500 
  ${isHeartFilled ? "text-rose-700" : " text-white"}`} >
    <FaHeart className="h-5 w-5 cursor-pointer"
    onClick={HandleHeartClick}/>
  </div>

{/* <Link to={`/menu/${item._id}`}> */}
  <figure>
    <img src={item.image} alt={item.name} 
     className="p-0 hover:scale-105 transition-all duration-200  md:h-64"/>
    </figure>
    {/* </Link> */}

  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.recipe}</p>
    <div className="card-actions justify-between items-center mt-5 ">
      <h5 className=" font-semibold"><span className="p-0 text-sm text-rose-600 ">$</span>{item.price}</h5>
      <button className="btn bg-rose-500 text-white hover:bg-rose-800">Buy Now</button>
    </div>
  </div>



</div>
  );
};

export default Cards;
