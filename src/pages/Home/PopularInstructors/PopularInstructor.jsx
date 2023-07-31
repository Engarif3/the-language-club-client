import React, { useState } from "react";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import InstructorModal from "../../../components/Modal/InstructorModal";
import { Link, useNavigate} from "react-router-dom";


const PopularInstructor = ({item}) => {

  const navigate = useNavigate();
  const [modal,setModal] = useState(false);
  const [isOpen,setIsOpen] = useState(false);
  const {instructorName,instructorPhoto, instructorEmail, seats} = item;

  const closeModal =()=> {
        setModal(false)
  }
  return (
    <div>
       
       {/* <div className="card  bg-slate-700 shadow-xl relative text-neutral-50"></div> */}
      <div className="card  bg-base-100 shadow-xl relative">
        <figure>
          <img
            className="h-80 w-11/12 rounded-lg object-fit m-4"
            src={instructorPhoto}
            alt="instructor"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p>Email: {instructorEmail}</p>
          <p>Students: {seats}</p>
        </div>
         <BsFillArrowRightCircleFill onClick={()=>setModal(true)} size={28}  className="absolute bottom-6 right-8 text-purple-600 cursor-pointer hover:scale-105"></BsFillArrowRightCircleFill>
      </div>
      <InstructorModal  isOpen={modal} closeModal={closeModal}  item={item}></InstructorModal>
    </div>
  );
};

export default PopularInstructor;

