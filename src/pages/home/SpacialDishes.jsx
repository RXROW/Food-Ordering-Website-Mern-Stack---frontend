import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Cards from '../../components/Cards';
import { FaA } from 'react-icons/fa6';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      Next
    </div>
  );
}

const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      Back
    </div>
  );
}

const SpacialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then(response => response.json())
      .then(data => {
        const specials = data.filter(item => item.category === "popular");
        setRecipes(specials);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='sectionContainer my-30 relative'>
      <div className='text-left'>
        <p className='subTitle mt-2'>Special Dishes</p>
        <h2 className='title md:w-[520px]'>Standout Dishes From Our Menu </h2>
        <div className='md:absolute right-3 top-8'>
          <button onClick={() => slider.current.slickPrev()} className='btn p-2 rounded-sm bg-rose-500 text-white hover:bg-rose-800'> 
          <FaAngleLeft className='w-8 h-8 p-1'/> </button>
          <button onClick={() => slider.current.slickNext()} className='btn p-2 rounded-sm  bg-rose-500 text-white hover:bg-rose-800'>
          <FaAngleRight className='w-8 h-8 p-1'/> </button>
        </div>
        <Slider ref={slider} {...settings} className='py-10'>
          {recipes.map((item, i) => (
            <div key={i}>
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SpacialDishes;
