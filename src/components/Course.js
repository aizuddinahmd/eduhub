import React from "react";
import styles from "../styles";
import { courses } from "../constant";

const CourseCard = ({ index, title, content }) => (
  <div className="rounded-2xl mx-auto p-[2px]  bg-gradient-to-tr from-purple-500 to-pink-500 cursor-pointer hover:scale-[1.05] transition-all duration-500">
    <div
      className={`flex flex-col justify-between h-full bg-white text-white rounded-2xl p-4`}
    >
      <div className={`flex-1 flex flex-col ml-3 max-w-[350px] max-h-[400px]`}>
        <h4 className="text-black font-poppins font-semibold font-[18px] leading-[23px] mb-1 ">
          {title}
        </h4>
        <p className="mt-5 text-black font-poppins font-normal font-[18px] leading-[23px] ">
          {content}
        </p>
      </div>
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
  </div>
);

const Course = () => {
  return (
    <section
      className={`${styles.marginY} ${styles.padding} ${styles.flexCenter} ${styles.boxWidth} flex sm:flex-row flex-col`}
    >
      <div className="flex flex-col items-center">
        <h4 className="font-semibold font-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          SERTAI KAMI
        </h4>
        <h2 className={`${styles.heading2} text-center`}>
          Terokai Kursus Yang Kami Tawarkan
        </h2>
        <div>
          <div className="w-full flex py-[20px] justify-center flex-row space-x-4">
            {courses.map((course, index) => (
              <CourseCard key={course.id} {...course} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
