import React from "react";
const Cities = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter">
        <span className="primaryText">Most Popular Styles</span>
      </div>
      <div className="paddings innerWidth flex justify-around flex-wrap gap-4">
        <img src="./1.jpg" alt="" className="w-80 z-[99] cursor-pointer" onClick={()=>navigate('../properties/')} />
        <img src="./2.jpg" alt="" className="w-80 z-[99] cursor-pointer" />
        <img src="./3.jpg" alt="" className="w-80 z-[99] cursor-pointer" />
        <img src="./4.jpg" alt="" className="w-80 z-[99] cursor-pointer" />
      </div>
    </section>
  );
};

export default Cities;
