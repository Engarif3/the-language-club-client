import React, { useState } from "react";
// import {BsFillArrowRightCircleFill} from "react-icons/bs";
import {IoIosArrowDropright} from "react-icons/io";
import InstructorModal from "../../../components/Modal/InstructorModal";
import { Link, useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const PopularInstructor = ({item}) => {
  const {darkMode} = useAuth();
  const navigate = useNavigate();
  const [modal,setModal] = useState(false);
  const [isOpen,setIsOpen] = useState(false);
  const {instructorName,instructorPhoto, instructorEmail, seats} = item;

  const closeModal =()=> {
        setModal(false)
  }
  return (
      <div div className={darkMode? "card bg-[#2D2D2D] text-white border-b-4 border-red-600 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300":"card bg-base-100 border-b-4 border-gray-600 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300"}>
        <figure>
          <img
            className="h-72 w-full rounded-t-lg object-fill"
            src={instructorPhoto}
            alt="instructor"
          />
        </figure>
        <div className="card-body h-[10rem]">
          <h2 className="card-title">{instructorName}</h2>
          <p>Email: {instructorEmail}</p>
          <p>Students: {seats}</p>
        </div>
         <IoIosArrowDropright onClick={()=>setModal(true)} size={32}  className="absolute bottom-6 right-8 text-neutral-400 cursor-pointer hover:text-slate-700 hover:scale-105"></IoIosArrowDropright>

        <InstructorModal  isOpen={modal} closeModal={closeModal}  item={item}></InstructorModal>  
      </div>
  );
};

export default PopularInstructor;

