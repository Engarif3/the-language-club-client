import React from 'react';
import SweetAlert from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import Container from '../../Container';

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
      fetch("https://assignment-12-server-woad.vercel.app/bookings", {
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
              title: "This Course is selected Successfully",
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
      <Container>
        <div className="card bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300">
          <figure>
            <img className="h-64 w-full rounded-t-lg object-cover" src={classImage} alt="Instructor Image" />
          </figure>
          <div className="card-body h-[12rem] ">
            <h2 className="card-title">Course Name: {nameClass}</h2>
            <p>Instructor Name: {instructorName}</p>
            <p>Available Seats: {seats}</p>
            <p>Price: ${price}</p>

            <div className="card-actions justify-end relative">
              {(!isInstructor && !isAdmin) && (
                <button className="btn btn-primary absolute bottom-1" onClick={handleSelect}>
                  Select
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>

  );
};

export default Course;
