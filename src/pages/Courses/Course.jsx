import React from 'react';
import SweetAlert from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Course = ({ course }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { classImage, nameClass, instructorName, email, seats, price } = course;
  // console.log(instructorEmail)

  const handleSelect = () => {
    if (user) {
      const saveBookings = { courseName: nameClass, instructorName: instructorName, email: email, seats: seats, price: price, user: user.email };
      fetch("https://assignment-12-server-engarif3.vercel.app/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveBookings),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This class is selected Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            // navigate("/");
          }
        });
    } else {
      SweetAlert.fire({
        text: 'Please login to select a course',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };

  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="h-80 w-11/12 rounded-lg cover m-4" src={classImage} alt="Instructor Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Course Name: {nameClass}</h2>
            <p>Instructor Name: {instructorName}</p>
            <p>Available Seats: {seats}</p>
            <p>Price: ${price}</p>

            <div className="card-actions justify-end">
              {(!isInstructor && !isAdmin) && (
                <button className="btn btn-primary" onClick={handleSelect}>
                  Select
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
