import React from "react";
import { useNavigate } from "react-router-dom";


const MyEnrolledClass = ({ paidClass }) => {

  const navigate = useNavigate();

  const {
    classImage,
    courseName,
    instructorName,
    instructorEmail,
    seats,
    price,
  } = paidClass;

  return (
    <div>
      <div>
        <div className="card w-76 bg-base-100 shadow-xl">
          {/* <figure>
            <img
              className="h-56 object-cover"
              src={classImage}
              alt="Instructor Image"
            />
          </figure> */}
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
