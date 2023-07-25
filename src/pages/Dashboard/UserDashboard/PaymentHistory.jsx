import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });

  const userEmail = user.email;
  const paymentUsers = payments.filter(
    (payment) => payment.email === userEmail
  );
  
  return (
    <div className="w-full text-center">
      <h3 className="text-3xl font-semibold my-4">
        Total Enrolled Classes: {paymentUsers.length}
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
              <th>Amount</th>
              <th>Date of Purchase</th>
              <th>Time of Purchase</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentUsers.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.courseName}</td>
                <td>{booking.instructorName}</td>
                <td>{booking.instructorEmail}</td>
                <td className="text-center">${booking.price}</td>
                <td className="text-center">{booking.date.split("T")[0]}</td>
                <td className="text-center">{booking.date.slice(11,19)}</td>
                <td className="text-center">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
