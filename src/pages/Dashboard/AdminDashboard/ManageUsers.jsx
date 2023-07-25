import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://assignment-12-server-woad.vercel.app/users");
    return res.json();
  });

  const handleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.name} an admin?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-12-server-woad.vercel.app/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is now an admin!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  const handleInstructor = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.name} an instructor?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-12-server-woad.vercel.app/users/instructor/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Instructor Now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full text-center">
        <Helmet>
          <title>The Language Club | Manage users</title>
        </Helmet>
        <h3 className="text-3xl font-semibold my-4">
           Total Users: {users.length}
        </h3>
      <div>
        <table className="table-auto table-zebra w-full">
          {/* head */}
          <thead className="bg-indigo-400 h-12">
            <tr>
              <th className="pl-12 rounded-l-lg">#</th>
              <th >Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th className="pr-12 rounded-r-lg">Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="h-4" key={user._id}>
                <th className="pl-12">{index + 1}</th>
                <td className="p-6">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role || "student"}</td>
                <td>
                  {user.role !== "admin" ? (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn btn-ghost bg-green-600 text-white"
                    >
                      <FaUserShield />
                    </button>
                  ) : (
                    <button
                      disabled
                      className="btn btn-ghost bg-green-600 text-white opacity-50 cursor-not-allowed"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  {user.role !== "instructor" ? (
                    <button
                      onClick={() => handleInstructor(user)}
                      className="btn btn-secondary bg-orange-600 text-white"
                    >
                      <FaUserShield />
                    </button>
                  ) : (
                    <button
                      disabled
                      className="btn btn-ghost bg-orange-600 text-white opacity-50 cursor-not-allowed"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;


