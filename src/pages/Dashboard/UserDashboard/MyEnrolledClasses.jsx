import { Helmet } from "react-helmet-async";

import { useQuery } from "@tanstack/react-query";
import MyEnrolledClass from "./MyEnrolledClass";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Loader/Loader";
import { useState } from "react";

const MyEnrolledClasses = () => {
  const [loading, setLoading] = useState([]);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["payments"], async () => {
    setLoading(true);
    const res = await axiosSecure.get("/payments");
    setLoading(false);
    return res.data;
  });
  const userEmail = user.email;
  const paidClasses = users.filter((payment) => payment.email === userEmail);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="mb-12">
      <Helmet>
        <title>The Language Club | Courses</title>
      </Helmet>
      <h2 className="text-5xl text-center py-12">My Enrolled Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-12 w-full">
        {paidClasses.map((paidClass) => (
          <MyEnrolledClass
            key={paidClass._id}
            paidClass={paidClass}
          ></MyEnrolledClass>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
