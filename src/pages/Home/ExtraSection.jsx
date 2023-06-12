import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import pointer from "../../assets/home/pointer.gif";
import img1 from "../../assets/home/lang1.jpg";
import img2 from "../../assets/home/lang2.jpg";
import img3 from "../../assets/home/lang3.jpg";
import img4 from "../../assets/home/lang4.jpg";



const ExtraSection = () => {
  useEffect(() => {
    AOS.init({
      // Configuration options
    });
  }, []);
  return (
    <div>
      <h2 className="text-5xl text-center">What do we offer?</h2>
      <div className="my-10 md:flex justify-center items-center gap-8">
        <div className="mx-auto text-3xl">
          <Fade cascade damping={0.4}>
            <p className="text-orange-600">We Offer...</p>
            <p className="ml-8 text-blue-800">More than 15 Foreign Languages...</p>
            <p className="ml-16 text-fuchsia-700">Join Our Club...</p>
            <p className="ml-24 text-slate-600">Explore the World of Language...</p>
            <div className=" flex justify-end">
            <img className="w-16 " src={pointer} alt="" />
            </div>
          </Fade>
        </div>
        <div className=" grid md:grid-cols-2 gap-4 p-4 justify-center">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="m-auto border-lg"
          >
            <img
              className="cover w-80 h-56"
              src={img1}
              alt=""
              style={{ borderRadius: "15px 15px" }}
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="m-auto border-lg"
          >
            <img
              className="cover w-80 h-56"
              src={img2}
              alt=""
              style={{ borderRadius: "15px 15px" }}
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="m-auto border-lg"
          >
            <img
              className="cover w-80 h-56"
              src={img3}
              alt=""
              style={{ borderRadius: "15px 15px" }}
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="m-auto border-lg"
          >
            <img
              className="cover w-80 h-56"
              src={img4}
              alt=""
              style={{ borderRadius: "15px 15px" }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
