import React from "react";
import './Cities.css'
const Cities = () => {
  return (
    <section className="ct-wrapper">
      <div className="paddings innerWidth flexCenter">
      <span className="primaryText">Most Popular Styles</span>

      </div>
      <div className="paddings innerWidth flexCenter ct-container" >
        <img src="./1.jpg" alt="" onClick={()=>navigate('../properties/')} />
        <img src="./2.jpg" alt="" />
        <img src="./3.jpg" alt="" />
        <img src="./4.jpg" alt="" />
        
      </div>
    </section>
  );
};

export default Cities;
