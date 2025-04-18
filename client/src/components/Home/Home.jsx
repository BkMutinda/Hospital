import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import myImage from "../../assets/myImage.webp";
import myImage1 from "../../assets/myImage1.webp";
import myImage2 from "../../assets/myImage2.jpg";
import myImage3 from "../../assets/myImage3.avif";
import myImage4 from "../../assets/myImage4.avif";
import myImage5 from "../../assets/myImage5.avif";
import myImage6 from "../../assets/myImage6.avif";
import myImage10 from "../../assets/myImage10.webp";

const Home = () => {
    const Pictures = [
      myImage,
      myImage1,
      myImage2,
      myImage3,
      myImage4,
      myImage5,
      myImage6,
      myImage10,
    ];

  const [currentImage, setcurrentImage] = useState(0)

  useEffect(() =>{
      const timer = setInterval(() => {
        setcurrentImage((prevImgae) => (prevImgae + 1) % Pictures.length);
      }, 3000);
      return () => clearInterval(timer);
  },[]);

  return (
    <section className=" h-screen ">
      <div className=" h-25 ">
        <Nav />
      </div>
      <div style={{ backgroundImage: `url(${Pictures[currentImage]}) ` }} className=" w-full ease-in-out   h-135 mt-0 bg-center bg-cover bg-no-repeat   " >
      <div className="">
      <p className="flex flex-col pt-25 ml-70">
          <motion.span
            initial={{ x: -90 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.0 }}
            className=" font-lato text-7xl  " 
          >
            NeLi Mission
          </motion.span>{" "}
          <motion.span
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="font-lato  mt-5 ml-70 text-5xl overlay-0 "
          >
            Hospital
          </motion.span>{" "}
        </p>
        <p className="flex ml-85 text-2xl text-green font- " ><i>A better life for better people</i></p>
      </div>
      </div>
    </section>
  );
};

export default Home;
