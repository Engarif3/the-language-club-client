import React from 'react';
import useAuth from '../../../hooks/useAuth';



const Lesson = ({ course }) => {

  const {darkMode} = useAuth();
  const { classImage, nameClass, instructorName, email, seats, price } = course;


  return (
    <div>
      
        {/* <div className="card bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300"> */}
        <div className={darkMode? "card bg-[#2D2D2D] text-white border-b-4 border-red-600 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300":"card bg-base-100 border-b-4 border-gray-600 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300"}>
          <figure>
            <img className="h-64 w-full rounded-t-lg object-fit" src={classImage} alt="Course Image" />
          </figure>
          <div className="card-body h-[13rem]">
            <h2 className="card-title">Course Name: {nameClass}</h2>
            <p>Instructor Name: {instructorName}</p>
            <p>Students: {seats}</p>
            <p>Price: ${price}</p>
          </div>
        </div>
  
    </div>
  );
};

export default Lesson;
