import React from "react";
import styles from "../styles";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-col flex-1 items-center justify-center ${styles.flexCenter} text-center`}
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] ">
          Pemangkin Pendidikan
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500 ">
            Blockchain
          </span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Dalami teknologi Blockchain melalui platform kami yang unik dan
          innovatif. Sertai komuniti kami dan mulakan perjalanan pendidikan
          Blockchain anda hari ini.
        </p>
      </div>
      <div className={`mr-0`}>
        <div className="absolute z-[0] w-[20%] h-[20%] rounded-full bottom-40  -left-20 purple__gradient"></div>
        <div className="absolute z-[0] w-[20%] h-[20%] rounded-full left-5 bottom-40 gold__gradient"></div>
      </div>
      <div className={``}>
        <div className="absolute z-[0] w-[20%] h-[20%] rounded-full right-10  top-40 purple__gradient"></div>
        <div className="absolute z-[0] w-[20%] h-[20%] rounded-full right-0 top-40 gold__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
