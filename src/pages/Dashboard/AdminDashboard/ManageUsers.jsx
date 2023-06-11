// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { FaTrashAlt, FaUserShield } from "react-icons/fa";
// import Swal from "sweetalert2";
// // import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const ManageUsers = () => {
//   // const [axiosSecure] = useAxiosSecure();
//   const { data: users = [], refetch } = useQuery(["users"], async () => {
//     // const res = await axiosSecure.get('/users')
//     // return res.data;
//     const res = await fetch("http://localhost:5000/users");
//     return res.json();
//   });



// const handleInstructor = (user) => {
//   Swal.fire({
//     title: 'Are you sure?',
//     text: `Do you want to make ${user.name} an instructor?`,
//     icon: 'question',
//     showCancelButton: true,
//     confirmButtonText: 'OK',
//     cancelButtonText: 'Cancel',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       fetch(`http://localhost:5000/users/instructor/${user._id}`, {
//         method: 'PATCH',
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           if (data.modifiedCount) {
//             refetch();
//             Swal.fire({
//               position: 'top-end',
//               icon: 'success',
//               title: `${user.name} is an Instructor Now!`,
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           }
//         });
//     }
//   });
// };


//   // const handleDelete = user => {

//   // }

//   return (
//     <div className="w-full">
//       <Helmet>
//         <title>The Language Club |Manage users</title>
//       </Helmet>
//       <h3 className="text-3xl font-semibold my-4">
//         Total Users: {users.length}
//       </h3>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Make Admin</th>
//               <th>Make Instructor</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <th>{index + 1}</th>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   {user.role === "admin" ? (
//                     "admin"
//                   ) : user.role === "instructor" ? (
//                     "instructor"
//                   ) : (
//                     <button
//                       onClick={() => handleInstructor(user)}
//                       className="btn btn-ghost bg-orange-600 text-white"
//                     >
//                       <FaUserShield></FaUserShield>
//                     </button>
//                   )}
//                 </td>
//                 {/* <td>
//                   <button
//                     onClick={() => handleDelete(user)}
//                     className="btn btn-ghost bg-red-600  text-white"
//                   >
//                     <FaTrashAlt></FaTrashAlt>
//                   </button>
//                 </td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
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
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
      <div className="overflow-x-auto">
        <table className="table table-zebra  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="h-8" key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
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
                      className="btn btn-ghost bg-orange-600 text-white"
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


