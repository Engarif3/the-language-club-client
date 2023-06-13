import React from 'react';


const Lesson = ({ course }) => {

  const { classImage, nameClass, instructorName, email, seats, price } = course;
  // console.log(instructorEmail)

  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-56 object-cover" src={classImage} alt="Instructor Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Course Name: {nameClass}</h2>
            <p>Instructor Name: {instructorName}</p>
            <p>Available Seats: {seats}</p>
            <p>Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
