import React from "react";
import styles from "../styles";
import logo from "../assets/logo.png";
// import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.padding} flex-col bg-primary`}
  >
    <div className={`${styles.flexStart} flex-col mb-8 w-full`}>
      <div className={`justify-start`}>
        <img
          src={logo}
          alt="sekolahkripto"
          className="w-[266px] h-[72px] object-contain"
        />
        <p
          className={`font-poppins font-normal text-[12px] text-center 
        max-w-[310px] mt-4 text-white`}
        >
          Platform Pendidikan Blockchain
        </p>
      </div>
    </div>
    <div className="flex md:flex-row flex-col w-full justify-between items-center pt-6 border-t-[1px] border-t-[#3f3E45]">
      <p
        className={`font-poppins font-normal text-[12px] text-center text-white`}
      >
        2023 SekolahKripto. All Rights Reserved.
      </p>
      {/* <div className={`flex flex-row md:mt-0 mt-6`}>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] cursor-pointer object-contain ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div> */}
    </div>
  </section>
);

export default Footer;
