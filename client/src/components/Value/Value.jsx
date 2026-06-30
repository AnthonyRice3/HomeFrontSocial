import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <section id="value">
      <div className="paddings innerWidth flexCenter">
        {/* left side */}
        <div className="flex-1">
          <div className="border-[8px] border-[rgba(232,232,232,0.93)] overflow-hidden rounded">
            <img src="./15.jpg" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart flex-1 gap-2">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We're always ready to help by providijng the best services for you. Good Fencing is foundational!
          </span>

          <Accordion
            className="mt-8 border-none w-full"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`bg-white border border-gray-200/14 rounded-lg overflow-hidden mb-5 ${className === 'expanded' ? 'shadow-custom rounded-md' : ''}`}
                  uuid={i}
                  key={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center justify-between bg-white p-4 w-full cursor-pointer">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flex items-center justify-center p-[10px] bg-[#eeeeff] rounded">
                        <span className="[&>svg]:fill-[#4066ff]">{item.icon}</span>
                      </div>
                      <span className="primaryText text-[1.1rem] sm:text-[0.8rem]">
                        {item.heading}
                      </span>
                      <div className="flex items-center justify-center p-[10px] bg-[#eeeeff] rounded">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
