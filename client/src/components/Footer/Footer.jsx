import React from "react";
const Footer = () => {
  return (
    <div>
      <div className="paddings innerWidth flex flex-wrap justify-between border-t border-[#130301]">
        {/* left side */}
        <div className="flexColStart gap-4">
          <img src="./logotrns.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make sure <br />
            everyone has secure reliable
            <br /> fencing.
          </span>
        </div>

        <div className="flexColStart">
          <span className="primaryText">Email</span>
          <span className="secondaryText">diamondfence0@gmail.com</span>
          <span className="primaryText">Phone</span>
          <span className="secondaryText">+1 (239) 308-8688</span>
        </div>
        <div>  
          <div className="flexColStart gap-6 mt-6 font-medium">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
        <div className="flexColStart">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.303861655956!2d-81.78416582397338!3d26.21931457706733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1e77f44ac80f%3A0xa14a822eae29af3b!2s1800%20Elsa%20St%20%233%2C%20Naples%2C%20FL%2034109!5e0!3m2!1sen!2sus!4v1718043930084!5m2!1sen!2sus" 
                        
                        height="250"  
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
