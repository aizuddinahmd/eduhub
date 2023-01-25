import styles from "../styles";
import React from "react";

const CTA = () => (
  <section
    className={`${styles.marginY} ${styles.flexCenter} ${styles.padding} flex sm:flex-row flex-col lightblue rounded-[20px]`}
  >
    <div className={`flex flex-1 flex-col`}>
      <h2
        className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-pink-500`}
      >
        Jom Belajar Sekarang!
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        Belajar sambil kumpul hadiah yang ditawarkan dengan percuma. Daftar
        sekarang dan mulakan perjalanan anda.
      </p>
      <div>
        <button
          className={`mt-5 bg-white py-2 px-4 font-poppins outline rounded-full text-primary hover:bg-purple-700 hover:text-white hover:outline-none transition-color duration-500`}
        >
          <span>Mulakan Sekarang</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline-block"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
