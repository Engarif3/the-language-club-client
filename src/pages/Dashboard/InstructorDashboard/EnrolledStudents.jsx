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
    // <div>
    //   <h2 className="text-5xl text-center my-10">Total Enrolled Students: {paidClasses.length}</h2>
    // </div>
    <div className="w-full">
      <h2 className="text-5xl text-center my-10">Total Enrolled Students: {paidClasses.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Student Name</th>
              <th>Student Email</th>
            </tr>
          </thead>
          <tbody>
            {paidClasses.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.courseName}</td>
                <td>{booking.studentName}</td>
                <td>{booking.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledStudents;
