import React from "react";
import { navLinksdata } from "./../../constants/index";
import { TbBrandNetflix } from "react-icons/tb";
import { SiStreamlit } from "react-icons/si";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-24 mx-auto px-16 flex sticky top-0 z-50 bg-bodyColor justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="rounded-full">
        <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl flex flex-col items-center justify-center rounded-full shadow-sm hover:bg-opacity-40 transition-all hover:text-designColor cursor-pointer duration-300">
          <SiStreamlit />
          <TbBrandNetflix />
        </span>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => {
            return (
              <li
                key={_id}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
