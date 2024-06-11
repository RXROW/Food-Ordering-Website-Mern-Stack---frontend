import React from "react";
import Catering from"../../assets/OurServicesImage/Catering.png";
import Fastdelivery from"../../assets/OurServicesImage/TakeAway.png";  
import OnlineOrdering  from"../../assets/OurServicesImage/Orderfood.png"; 
import Gift  from"../../assets/OurServicesImage/Gift.png";  
 
const servicesLeit=[
  {id:1 , title:"Catering" , des:"Delight Your gues with flower and persentaion" ,image:Catering},
  {id:2 , title:"Fast delivery" , des:"We delvir your order promptly to your door " ,image:Fastdelivery},
  {id:3 , title:"Online Ordering" , des:"Explor menu & order with ease using our online ordering " ,image:OnlineOrdering},
  {id:4 , title:"Gift Card " , des:"Give the gift of exceptional dining with foodi gift cards" ,image:Gift },
];
const OurServices = () => {
  return (
    <div className="sectionContainer my-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subTitle mt-2">Our Services</p>
            <h2 className="title"> Our Culinary & Services </h2>
            <p className="my-5 text-secondary leading-[35px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              ullam adipisci in sit autem? Eos quisquam dolorum, dicta quos sunt
              facere et reiciendis vel ad delectus nam, laboriosam cumque
              architecto!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci saepe neque iusto recusandae, vero magni dolores soluta architecto laboriosam cumque repudiandae quam. Necessitatibus ducimus corrupti atque ullam officia delectus?
            </p>
            <button className="btn bg-rose-600 hover:bg-rose-800 text-white rounded-md">
              Explor
            </button>
          </div>
        </div>
        <div className="md:w-1/2"> 
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
          {
            servicesLeit.map((service)=>
              <div key={service.id} className="    rounded-sm   py-5 text-center space-y-2 cursor-pointer hover:border-rose-600 transition-all duration-200   hover:shadow-md hover:scale-105  hover:border    ">
                <img className=" mx-auto w-40" src={service.image} alt={service.title} />
                <h5 className="pt-3 font-semibold ">{service.title}</h5>
                <p className=" text-rose-800">{service.des}</p>

              </div>

            )
          }

        </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
