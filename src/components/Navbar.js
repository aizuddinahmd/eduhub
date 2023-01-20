import React from "react";
import { navLinks } from "../constant/index";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center navbar py-[6px]">
      <img src={logo} alt="logo" className="w-[80px] h-[75px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={`${nav.id}`}
            className={`font-poppins font-normal cursor-point text-[16px] mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <button className={`purple rounded-[5px] px-[4px] text-white`}>
          Daftar Masuk
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
