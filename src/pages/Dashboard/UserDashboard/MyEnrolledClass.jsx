import React from "react";
import { useNavigate } from "react-router-dom";


const MyEnrolledClass = ({ paidClass }) => {

  const navigate = useNavigate();

  const {
    
    courseName,
    instructorName,
    instructorEmail
  } = paidClass;

  return (
    <div>
      <div>
        <div className="card w-82 bg-base-100 shadow-xl">
          <div className="card-body w-full p-8">
            <h2 className="card-title">Course Name: {courseName}</h2>
            <h2 className="card-title">Instructor:</h2>
            <p> Name: {instructorName}</p>
            <p> Email: {instructorEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
