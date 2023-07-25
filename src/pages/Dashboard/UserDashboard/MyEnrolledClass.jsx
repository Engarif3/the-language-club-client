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
        <div className="card w-76 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Course Name: {courseName}</h2>
            <p>Instructor Name: {instructorName}</p>
            <p>Instructor Email: {instructorEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
