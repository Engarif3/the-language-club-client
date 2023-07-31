import React from "react";
import Calender from "./Calender";
import Container from "../../Container";
import "./Calender.css";
import Contact from "./Contact";
import useAuth from "../../hooks/useAuth";
import { useLocation, useParams } from "react-router-dom";

const Appointment = (props) => {
  
  const {id} = useParams();
  const {item} = useLocation().state;
  // console.log(id, item)
  const {darkMode} = useAuth();
  return (
    <Container>
      <div className={darkMode?"text-neutral-50 text-center my-8":"text-slate-900 text-center my-8"}>
        <h2 className="text-2xl">Need an appointment?</h2>
        <h2 className="text-3xl text-center text-orange-600  font-bold my-8">
        Please provide your contact details
      </h2>
      </div>
      <div className=" flex flex-col md:flex-row lg:flex-row justify-center items-center">
        <div className="flex justify-center">
          <Contact item={item}></Contact>
        </div>
        {/* <div className="bg-white rounded-xl border-[1px] border-red-600 overflow-hidden md:w-3/12 flex justify-center items-center py-8 mb-8">
          <div>
            <Calender></Calender>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Appointment;
