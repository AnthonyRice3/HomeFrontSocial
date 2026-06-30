import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";

const staticProperties = [
  { id: "1", image: "./1.jpg", price: "1,200", title: "Wood Privacy Fence",   description: "Classic wood privacy fence for residential yards." },
  { id: "2", image: "./2.jpg", price: "1,800", title: "Chain Link Fence",     description: "Durable chain link fencing for commercial and residential use." },
  { id: "3", image: "./3.jpg", price: "2,500", title: "Aluminum Ornamental",  description: "Elegant aluminum ornamental fence with powder coat finish." },
  { id: "4", image: "./4.jpg", price: "3,200", title: "Vinyl Privacy Fence",  description: "Low-maintenance vinyl privacy fence in multiple styles." },
  { id: "5", image: "./1.jpg", price: "950",   title: "Pool Fence",           description: "Code-compliant pool enclosure fencing for safety." },
  { id: "6", image: "./2.jpg", price: "1,450", title: "Cedar Split Rail",     description: "Rustic cedar split rail fence for open properties." },
];

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter gap-4 absolute -top-16 right-0">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-xl py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded bg-[#EEEEFF] cursor-pointer"
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-xl py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded bg-white shadow cursor-pointer"
      >
        &gt;
      </button>
    </div>
  );
};

const Residencies = () => {
  return (
    <div id="residencies">
      <div className="paddings innerWidth flexColStart gap-8 relative overflow-hidden">
        <div className="flexColStart mb-8">
          <span className="orangeText">Our Work</span>
          <span className="primaryText">Popular Fence Styles</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {staticProperties.map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;
