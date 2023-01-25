import React from "react";
import styles, { layout } from "../styles";
import { features } from "../constant";

const FeatureCard = ({ index, title, content }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] feature-card ${
      index !== features.length - 1 ? "mb - 6" : "mb - 0"
    }`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    ></div>
    <div className={`flex-1 flex flex-col ml-3 `}>
      <h4 className="text-black font-poppins font-semibold font-[18px] leading-[23px] mb-1 ">
        {title}
      </h4>
      <p className="text-black font-poppins font-normal font-[18px] leading-[23px] ">
        {content}
      </p>
    </div>
  </div>
);

const Tentangkami = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h4 className="font-semibold font-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500">
          TRANSFORMASI PENDIDIKAN
        </h4>
        <h2 className={`${styles.heading2}`}>
          Alami Masa Depan Pendidikan Hari Ini
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          EduHub membantu anda menerokai teknologi Blockchain sambil mengumpul
          ganjaran dengan 3 langkah mudah.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Tentangkami;
