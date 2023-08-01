import React from 'react';
import Container from '../../../Container';


const Lesson = ({ course }) => {

  const { classImage, nameClass, instructorName, email, seats, price } = course;
  // console.log(instructorEmail)

  return (
    <div>
      
        <div className="card bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300">
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
