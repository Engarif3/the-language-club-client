
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { useParams } from "react-router-dom";

const Feedback = () => {
  const {id} = useParams();

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
 
  const paidClasses = users.filter((payment) => payment._id === id && payment.feedback !==null);


  return (
    <div>
      <h2 className="text-5xl text-center my-10">
        No. of Feedback from Admin: {paidClasses.length}
      </h2>
      {paidClasses.map((paid) => (
        <li className="text-2xl ml-10" key={paid._id}>
          {paid.feedback}
        </li>
      ))}
    </div>
  );
};

export default Feedback;
