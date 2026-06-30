import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const ModeCard = ({ icon, title, detail, buttonLabel }) => (
  <div className="flexColCenter gap-4 w-64 max-w-full p-4 border border-gray-200/14 rounded transition-all duration-300 hover:scale-110 hover:shadow-custom">
    <div className="flexStart gap-[1.6rem] w-full min-w-0">
      <div className="flexCenter p-[10px] bg-[#eeeeff] rounded">
        {icon}
      </div>
      <div className="flexColStart min-w-0">
        <span className="text-[#2c2c2c] font-semibold text-[1.1rem]">{title}</span>
        <span className="secondaryText break-words w-full">{detail}</span>
      </div>
    </div>
    <div className="flexCenter w-full bg-[#eeeeff] text-[#4066ff] text-[0.9rem] font-semibold py-2 px-4 rounded cursor-pointer hover:bg-blue-gradient hover:text-white hover:scale-90 transition-all duration-300">
      {buttonLabel}
    </div>
  </div>
);

const Contact = () => {
  return (
    <div id="contact-us">
      <div className="paddings innerWidth flex flex-wrap justify-between gap-8 lg:flex-row flex-col">
        {/* left side */}
        <div className="flexColStart gap-2 flex-1">
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
          </span>

          <div className="flexColStart gap-4 mt-8">
            {/* first row */}
            <div className="flex gap-6 flex-wrap lg:flex-row flex-col w-full">
              <ModeCard icon={<MdCall size={25} />} title="Call" detail="+1 (239) 308-8688" buttonLabel="Call now" />
              <ModeCard icon={<BsFillChatDotsFill size={25} />} title="Email" detail="diamondfence0@gmail.com" buttonLabel="Email now" />
            </div>
            {/* second row */}
            <div className="flex gap-6 flex-wrap lg:flex-row flex-col w-full">
              <ModeCard icon={<BsFillChatDotsFill size={25} />} title="Support" detail="Available by phone and email" buttonLabel="Contact us" />
              <ModeCard icon={<HiChatBubbleBottomCenter size={25} />} title="Message" detail="Send us a quick note anytime" buttonLabel="Message now" />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd flex-1">
          <div className="w-[30rem] h-[35rem] overflow-hidden rounded-[15rem_15rem_0_0] border-[8px] border-white/12">
            <img src="./13.jpg" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
