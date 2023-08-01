import React from "react";

const MyEnrolledClass = ({ paidClass }) => {

  const {
    
    courseName,
    instructorName,
    instructorEmail
  } = paidClass;

  return (
    <div>
      <div>
        <div className="card w-82 bg-slate-700 shadow-xl">
          <div className="card-body w-full p-8">
            <h2 className="card-title text-orange-700">Course Name: {courseName}</h2>
            <h2 className="card-title text-cyan-600">Instructor:</h2>
            <p className="text-white"> Name: {instructorName}</p>
            <p className="text-white"> Email: {instructorEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
