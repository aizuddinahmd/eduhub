import React from "react";
import styles from "../styles";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-col flex-1 items-center justify-center ${styles.flexCenter}`}
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] ">
          Dalami Teknologi
          <br />
          <span className="text2-gradient ">Blockchain</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Jom dapatkan sijil blockchain percuma dari Sekolah Kripto. Modul ini
          disediakan dalam Bahasa Melayu.
        </p>
      </div>
      <div className={`mr-0`}>
        <div className="absolute z-[0] w-[20%] h-[20%] rounded-full bottom-40  -left-20 purple__gradient"></div>
        <div className="absolute z-[0] w-[20%] h-[20%] rounded-full left-5 bottom-40 gold__gradient"></div>
      </div>
      <div className={``}>
        <div className="absolute z-[0] w-[20%] h-[20%] rounded-full right-10  top-40 purple__gradient">
          biru
        </div>
        <div className="absolute z-[0] w-[20%] h-[20%] rounded-full right-0 top-40 gold__gradient">
          emas
        </div>
      </div>
    </section>
  );
};

export default Hero;
