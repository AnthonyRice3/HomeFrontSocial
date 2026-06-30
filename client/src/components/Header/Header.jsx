import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="sticky top-0 z-[99] bg-white">
      <div className="flexCenter innerWidth paddings py-4 text-black font-bold justify-between">
        {/* logo */}
        <Link to="/">
          <img src="./logotrns.png" alt="logo" width={100} />
        </Link>

        {/* menu */}
        <div
          className="flex items-center gap-8 [&>*]:cursor-pointer max-md:text-[#131110] max-md:absolute max-md:gap-8 max-md:font-medium max-md:flex-col max-md:right-16 max-md:top-12 max-md:bg-white max-md:rounded-[10px] max-md:transition-all max-md:duration-200 max-md:items-start max-md:p-12 max-md:shadow-md"
          style={getMenuStyles(menuOpened)}
        >
          <a href="mailto:diamondfence0@gmail.com">diamondfence0@gmail.com</a>
          <a href="tel:+12393088688">+1 (239) 308-8688</a>
          <a href="#contact-us">Contact</a>
        </div>

        {/* hamburger for small screens */}
        <div
          className="hidden max-md:block cursor-pointer"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
