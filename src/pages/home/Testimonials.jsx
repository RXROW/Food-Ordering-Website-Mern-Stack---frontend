import React from "react";
import testImage from "../../assets/testimonials.png";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="sectionContainer p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src={testImage} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subTitle mt-2">testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              ullam adipisci in sit autem? Eos quisquam dolorum, dicta quos sunt
              facere et reiciendis vel ad delectus nam, laboriosam cumque
              architecto!"
            </blockquote>
            {/* Avatar */}
            <div className="flex items-center gap-4 flex-wrap ">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://e7.pngegg.com/pngimages/741/52/png-clipart-customer-service-happiness-customer-experience-others-company-photography.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src=" https://www.shutterstock.com/image-photo/portrait-confident-man-arms-crossed-260nw-2333089669.jpg  " />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
          
            <div className=" space-y-1">
            <h5 className="text-sm font-semibold " >Customers Feedback</h5>
         <div className="flex">      <FaStar className=" text-yellow-400 "/>
              <FaStar className=" text-yellow-400 "/>
              <FaStar className=" text-yellow-400 "/>
              <FaStar className=" text-yellow-400 "/>
             </div>
        
          
              <span className=" font-medium text-sm"> 4.9 </span>   <span className=" text-secondary"> (18.9k Reviews) </span>

            
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
