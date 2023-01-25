import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import styles from "./styles";
import Tentangkami from "./components/Tentangkami";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Tentangkami />

          <div className={`${styles.boxWidth}`}>
            <Course />
            <CTA />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
