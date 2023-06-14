// // import React, { useState, useEffect } from 'react';
// // import useAxiosSecure from '../../../hooks/useAxiosSecure';
// // import Swal from 'sweetalert2';

// // const ManageClass = () => {
// //   const [axiosSecure] = useAxiosSecure();
// //   const [classes, setClasses] = useState([]);

// //   useEffect(() => {
// //     fetchClasses();
// //   }, []);

// //   const fetchClasses = async () => {
// //     try {
// //       const res = await axiosSecure.get('/classes');
// //       const updatedClasses = res.data.map(classItem => ({
// //         ...classItem,
// //         disabled: classItem.status === 'approved' || classItem.status === 'denied'
// //       }));
// //       setClasses(updatedClasses);
// //     } catch (error) {
// //       console.log('Error fetching classes:', error);
// //     }
// //   };

// //   const handleApprove = async (classId, index) => {
// //     try {
// //       await axiosSecure.patch(`/classes/${classId}`, { status: 'approved' });
// //       Swal.fire('Class Approved', '', 'success');
// //       updateClassStatus(index, 'approved');
// //     } catch (error) {
// //       console.log('Error approving class:', error);
// //     }
// //   };

// //   const handleDeny = async (classId, index) => {
// //     try {
// //       await axiosSecure.patch(`/classes/${classId}`, { status: 'denied' });
// //       Swal.fire('Class Denied', '', 'success');
// //       updateClassStatus(index, 'denied');
// //     } catch (error) {
// //       console.log('Error denying class:', error);
// //     }
// //   };

// //   const updateClassStatus = (index, status) => {
// //     setClasses(prevClasses => {
// //       const updatedClasses = [...prevClasses];
// //       updatedClasses[index].status = status;
// //       updatedClasses[index].disabled = true;
// //       return updatedClasses;
// //     });
// //   };

// //   return (
// //     <div className="w-full">
// //       <h3 className="text-3xl font-semibold my-4">Total Classes: {classes.length}</h3>
// //       <div className="overflow-x-auto">
// //         <table className="table table-zebra w-full">
// //           {/* head */}
// //           <thead>
// //             <tr>
// //               <th>#</th>
// //               <th>Class Name</th>
// //               <th>Instructor Name</th>
// //               <th>Instructor Email</th>
// //               <th>Available Seats</th>
// //               <th>Price</th>
// //               <th>Status</th>
// //               <th>Approve</th>
// //               <th>Deny</th>
// //               <th>Feedback</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {classes.map((classItem, index) => (
// //               <tr key={classItem._id}>
// //                 <td>{index + 1}</td>
// //                 <td>{classItem.nameClass}</td>
// //                 <td>{classItem.instructorName}</td>
// //                 <td>{classItem.email}</td>
// //                 <td className="text-center">{classItem.seats}</td>
// //                 <td className="text-center">{classItem.price}</td>
// //                 <td className="text-primary">{classItem.status}</td>
// //                 <td>
// //                   <button
// //                     onClick={() => handleApprove(classItem._id, index)}
// //                     className="btn btn-sm btn-primary text-xs"
// //                     disabled={classItem.disabled}
// //                   >
// //                     Approve
// //                   </button>
// //                 </td>
// //                 <td>
// //                   <button
// //                     onClick={() => handleDeny(classItem._id, index)}
// //                     className="btn btn-sm btn-primary text-xs"
// //                     disabled={classItem.disabled}
// //                   >
// //                     Deny
// //                   </button>
// //                 </td>
// //                 <td>
// //                   <button className="btn btn-sm btn-primary text-xs">
// //                     Send <br /> Feedback
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ManageClass;

// import React, { useState, useEffect } from 'react';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import Swal from 'sweetalert2';

// const ManageClass = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   const fetchClasses = async () => {
//     try {
//       const res = await axiosSecure.get('/classes');
//       const updatedClasses = res.data.map((classItem) => ({
//         ...classItem,
//         disabled: classItem.status === 'approved' || classItem.status === 'denied',
//       }));
//       setClasses(updatedClasses);
//     } catch (error) {
//       console.log('Error fetching classes:', error);
//     }
//   };

//   const handleApprove = async (classId, index) => {
//     try {
//       await axiosSecure.patch(`/classes/${classId}`, { status: 'approved' });
//       Swal.fire('Class Approved', '', 'success');
//       updateClassStatus(index, 'approved');
//     } catch (error) {
//       console.log('Error approving class:', error);
//     }
//   };

//   const handleDeny = async (classId, index) => {
//     try {
//       await axiosSecure.patch(`/classes/${classId}`, { status: 'denied' });
//       Swal.fire('Class Denied', '', 'success');
//       updateClassStatus(index, 'denied');
//     } catch (error) {
//       console.log('Error denying class:', error);
//     }
//   };

//   const updateClassStatus = (index, status) => {
//     setClasses((prevClasses) => {
//       const updatedClasses = [...prevClasses];
//       updatedClasses[index].status = status;
//       updatedClasses[index].disabled = true;
//       return updatedClasses;
//     });
//   };

//   const handleSendFeedback = async (classId, index) => {
//     try {
//       const { value: feedback } = await Swal.fire({
//         title: 'Send Feedback',
//         input: 'textarea',
//         inputPlaceholder: 'Enter your feedback here...',
//         showCancelButton: true,
//         confirmButtonText: 'Submit',
//         cancelButtonText: 'Cancel',
//         inputValidator: (value) => {
//           if (!value) {
//             return 'Please enter your feedback';
//           }
//         },
//       });
  
//       if (feedback) {
//         const classToUpdate = classes[index];
//         const updatedClass = { ...classToUpdate, feedback };
  
//         const updatedClasses = [...classes];
//         updatedClasses[index] = updatedClass;
//         setClasses(updatedClasses);
  
//         await axiosSecure.patch(`/classes/${classId}`, { ...updatedClass });
//         Swal.fire('Feedback Sent', '', 'success');
//       }
//     } catch (error) {
//       console.log('Error sending feedback:', error);
//     }
//   };
  
  

//   return (
//     <div className="w-full">
//       <h3 className="text-3xl font-semibold my-4">Total Classes: {classes.length}</h3>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Photo</th>
//               <th>Class Name</th>
//               <th>Instructor Name</th>
//               <th>Instructor Email</th>
//               <th>Available Seats</th>
//               <th>Price</th>
//               <th>Status</th>
//               <th>Approve</th>
//               <th>Deny</th>
//               <th>Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {classes.map((classItem, index) => (
//               <tr key={classItem._id}>
//                 <td>{index + 1}</td>
//                 <td><img className='w-8 h-8 ml-2' src={classItem.classImage} alt="" /></td>
//                 <td>{classItem.nameClass}</td>
//                 <td>{classItem.instructorName}</td>
//                 <td>{classItem.email}</td>
//                 <td className="text-center">{classItem.seats}</td>
//                 <td className="text-center">${classItem.price}</td>
//                 <td className="text-primary">{classItem.status}</td>
//                 <td>
//                   <button
//                     onClick={() => handleApprove(classItem._id, index)}
//                     className="btn btn-sm btn-primary text-xs"
//                     disabled={classItem.disabled}
//                   >
//                     Approve
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDeny(classItem._id, index)}
//                     className="btn btn-sm btn-primary text-xs"
//                     disabled={classItem.disabled}
//                   >
//                     Deny
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleSendFeedback(classItem._id, index)}
//                     className="btn btn-sm btn-primary text-xs"
//                     // disabled={classItem.disabled}
//                   >
//                     Send Feedback
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageClass;

import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const res = await axiosSecure.get('/classes');
      const updatedClasses = res.data.map((classItem) => ({
        ...classItem,
        disabled: classItem.status !== 'pending',
      }));
      setClasses(updatedClasses);
    } catch (error) {
      console.log('Error fetching classes:', error);
    }
  };

  const handleApprove = async (classId, index) => {
    try {
      await axiosSecure.patch(`/classes/${classId}`, { status: 'approved' });
      Swal.fire('Class Approved', '', 'success');
      updateClassStatus(index, 'approved');
    } catch (error) {
      console.log('Error approving class:', error);
    }
  };

  const handleDeny = async (classId, index) => {
    try {
      await axiosSecure.patch(`/classes/${classId}`, { status: 'denied' });
      Swal.fire('Class Denied', '', 'success');
      updateClassStatus(index, 'denied');
    } catch (error) {
      console.log('Error denying class:', error);
    }
  };

  const updateClassStatus = (index, status) => {
    setClasses((prevClasses) => {
      const updatedClasses = [...prevClasses];
      updatedClasses[index].status = status;
      updatedClasses[index].disabled = true;
      return updatedClasses;
    });
  };

  const handleSendFeedback = async (classId, index) => {
    try {
      const { value: feedback } = await Swal.fire({
        title: 'Send Feedback',
        input: 'textarea',
        inputPlaceholder: 'Enter your feedback here...',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        inputValidator: (value) => {
          if (!value) {
            return 'Please enter your feedback';
          }
        },
      });

      if (feedback) {
        const classToUpdate = classes[index];
        const updatedClass = { ...classToUpdate, feedback };

        const updatedClasses = [...classes];
        updatedClasses[index] = updatedClass;
        setClasses(updatedClasses);

        await axiosSecure.patch(`/classes/${classId}`, { ...updatedClass });
        Swal.fire('Feedback Sent', '', 'success');
      }
    } catch (error) {
      console.log('Error sending feedback:', error);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">Total Classes: {classes.length}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>
                  <img className="w-8 h-8 ml-2" src={classItem.classImage} alt="" />
                </td>
                <td>{classItem.nameClass}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.email}</td>
                <td className="text-center">{classItem.seats}</td>
                <td className="text-center">${classItem.price}</td>
                <td className="text-primary">{classItem.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(classItem._id, index)}
                    className="btn btn-sm btn-primary text-xs"
                    disabled={classItem.disabled}
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeny(classItem._id, index)}
                    className="btn btn-sm btn-primary text-xs"
                    disabled={classItem.disabled}
                  >
                    Deny
                  </button>
                </td>
                <td>
                  {classItem.status === 'denied' && (
                    <button
                      onClick={() => handleSendFeedback(classItem._id, index)}
                      className="btn btn-sm btn-primary text-xs"
                    >
                      Send Feedback
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

export default ManageClass;


