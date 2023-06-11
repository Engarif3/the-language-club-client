import React from "react";
import SweetAlert from "sweetalert2";
// import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyEnrolledClass = ({ paidClass }) => {
  //   const { user } = useAuth();
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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-56 object-cover"
              src={classImage}
              alt="Instructor Image"
            />
          </figure>
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
