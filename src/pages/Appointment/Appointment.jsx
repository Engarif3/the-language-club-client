import React from "react";
import Button from "../../components/Button/Button";
import Calender from "./Calender";
import Container from "../../Container";

const Appointment = () => {
  return (
    <Container >
      <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden w-80 flex justify-center items-center'>
            <div >
                <Calender></Calender>
                <hr />
                <div className='p-2'>
                    <Button label={"Book"}></Button>
                </div>
                <hr />
            </div>
            
        </div>
    </Container>
  );
};

export default Appointment;
