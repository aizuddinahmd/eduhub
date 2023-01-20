import React from "react";
import styles from "../styles";
import { courses } from "../constant";

const Course = () => {
  return (
    <section
      className={`${styles.marginY} ${styles.padding} flex sm:flex-row flex-col box-shadow drop-shadow-xl bg-white rounded-[20px]`}
    >
      <div className={`flex s:flex-col flex-row justify-between`}>
        <div className="w-[50%]">
          <h4 className={`font-poppins font-semibold text-[24px]`}>
            Modul SK001
            <br />
            <span>Blockchain Untuk Konsumer (MOOC)</span>
          </h4>
          <p className={`${styles.paragraph} py-[10px]`}>
            Modul ini disediakan khusus bagi mereka yang tidak mempunyai
            pengalaman di dalam dunia Blockchain. Kandungan disusun bagi
            memastikan para pelajar dapat memahami pelbagai aspek tentang
            Blockchain seperti desentralisasi, Proof of Work dan proses jual
            beli aset kripto. Di akhir setiap topik, pelajar akan diberikan
            ujian penilaian.
          </p>
        </div>

        <div className={`flex flex-col justify-center space-y-5`}>
          <p>
            <p className="text-color">Harga</p>
            <span className="text-black">Percuma</span>
          </p>
          <p>
            <p className="text-color">Tempoh cadangan</p>
            <span className="text-black">16 minggu</span>
          </p>
        </div>
        <div className={`box outline rounded-xl px-[20px] `}>
          <ul className={`list-disc list-inside`}>
            {courses.map((course) => (
              <li key={course.id}>{course.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Course;
