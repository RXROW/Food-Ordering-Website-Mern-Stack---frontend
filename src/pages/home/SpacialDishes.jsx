import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import Slider from "react-slick";
import Cards from '../../components/Cards';

const SpacialDishes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then(response => response.json())
      .then(data => {
        const specials = data.filter(item => item.category === "popular");
        setRecipes(specials);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
    <div className='sectionContainer my-30 '>
      <div className='text-left'>
        <p className='subTitle mt-2'>Special Dishes</p>
        <h2 className='title md:w-[520px]'>Standout Dishes From Our Menu </h2>
        <Slider {...settings} className='py-10'>
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
