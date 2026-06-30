import React from "react";
const GetStarted = () => {
  return (
    <div id="get-started">
      <div className="paddings innerWidth">
        <div className="flexColCenter gap-6 bg-[#2e2e2e] p-8 rounded-[10px] border-[6px] border-[#5d77d6] text-center">
          <span className="text-white font-semibold text-3xl">Get started with Diamond Fence Corp!</span>
          <span className="text-white/60 text-[0.9rem]">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your perfect fence!
          </span>
          <button className="bg-[#5a73d7] border-2 border-white shadow-custom rounded-[10px] py-2 px-4 text-white cursor-pointer">
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
