import React from "react";
import Calender from "./Calender";
import Container from "../../Container";
import "./Calender.css";
import Contact from "./Contact";
import useAuth from "../../hooks/useAuth";

const Appointment = () => {
  const {darkMode} = useAuth();
  return (
    <Container>
      <div className={darkMode?"text-neutral-50 text-center my-8":"text-slate-900 text-center my-8"}>
        <h2 className="text-2xl">Need an appointment?</h2>
      </div>
      <div className=" flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="flex justify-center">
          <Contact></Contact>
        </div>
        <div className="bg-white rounded-xl border-[1px] border-red-600 overflow-hidden md:w-6/12 flex justify-center items-center py-8 mb-8">
          <div>
            <Calender></Calender>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Appointment;
