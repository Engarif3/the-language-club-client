import React from "react";
import Button from "../../components/Button/Button";
import Calender from "./Calender";
import Container from "../../Container";
import "./Calender.css";
import Contact from "./Contact";

const Appointment = () => {
  return (
    <Container>
      <div className="text-neutral-50 text-center my-8">
        <h2 className="text-2xl">Need an appointment?</h2>
      </div>
      <div className=" flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center">
        <div className="flex justify-center">
          <Contact></Contact>
        </div>
        <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden w-6/12 flex justify-center items-center py-12">
          <div>
            <Calender></Calender>
            <hr />
            <div className="p-2">
              <Button label={"Book"}></Button>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Appointment;
