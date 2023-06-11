import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MySelectedClasses = () => {
  const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: bookings = [], refetch } = useQuery(["bookings"], async () => {
    const res = await axiosSecure.get("/bookings");
    return res.data;
  });

  const handleDelete = booking => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/bookings/${booking._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

        }
    })
}
  const handlePay = (item) =>{}

  console.log(bookings)

 const userEmail = user.email;
const filteredUsers = bookings.filter(user => user.user === userEmail);

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">
        Total Selected Classes: {filteredUsers.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.courseName}</td>
                <td>{booking.instructorName}</td>
                <td>{booking.email}</td>
                <td className="text-center">{booking.seats}</td>
                <td className="text-center">{booking.price}</td>
                <td>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(booking)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
