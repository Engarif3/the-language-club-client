import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const EnrolledStudents = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });
  //   const paidClasses = users.filter(user => user.status === "paid")
  const userEmail = user.email;
  const paidClasses = users.filter((payment) => payment.instructorEmail === userEmail);
  return (
    <div>
      <h2 className="text-5xl text-center my-10">Total Enrolled Students: {paidClasses.length}</h2>
    </div>
  );
};

export default EnrolledStudents;
