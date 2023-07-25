import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import accept from "../../../assets/accept.png"
import deny from "../../../assets/deny.png"
import forbidden from "../../../assets/forbidden.png"
import feedback from "../../../assets/feedback.png"

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
    <div className="w-full text-center">
      <h3 className="text-3xl font-semibold my-4">Total Courses: {classes.length}</h3>
      <div>
        <table className="table-auto table-zebra w-full">
          {/* head */}
          <thead className="bg-indigo-400 h-12">
            <tr className='text-sm'>
              <th className="pl-4 rounded-l-lg">#</th>
              <th className="px-4">Photo</th>
              <th className="px-4">Course Name</th>
              <th className="px-4">Instructor Name</th>
              <th className="px-4">Instructor Email</th>
              <th className="px-4">Seats</th>
              <th className="px-4">Price</th>
              <th className="px-4">Status</th>
              <th className="px-4">Approve</th>
              <th className="px-4">Deny</th>
              <th className="pr-4 rounded-r-lg">Feedback</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <td className="px-4">{index + 1}</td>
                <td className="px-4">
                  <img className="w-8 h-8 rounded-md" src={classItem.classImage} alt="" />
                </td>
                <td className="px-4">{classItem.nameClass}</td>
                <td className="px-4">{classItem.instructorName}</td>
                <td className="px-4">{classItem.email}</td>
                <td className="text-center px-4">{classItem.seats}</td>
                <td className="text-center px-4">${classItem.price}</td>
                <td className={classItem.status==="denied"?"text-red-600 px-4":classItem.status==="approved"?"text-green-500":"text-indigo-600 animate-bounce px-4"}>{classItem.status}</td>
                <td td className="px-4">
                  <button
                    onClick={() => handleApprove(classItem._id, index)}
                    className="btn btn-sm bg-sky-900 text-xs"
                    disabled={classItem.disabled}
                  >
                    {classItem.disabled?<img className='h-6 w-6' src={forbidden} alt="forbidden_image" />:<img className='h-6 w-6' src={accept} alt="accept-image" />}
                  </button>
                </td>
                <td className="px-4">
                  <button
                    onClick={() => handleDeny(classItem._id, index)}
                    className="btn btn-sm bg-sky-900 text-xs"
                    disabled={classItem.disabled}
                  >
                    {classItem.disabled?<img className='h-6 w-6' src={forbidden} alt="forbidden_image" />:<img className='h-6 w-6' src={deny} alt="deny_image" />}
                  </button>
                </td>
                <td className="px-4">
                  {classItem.status === 'denied' && (
                    <button
                      onClick={() => handleSendFeedback(classItem._id, index)}
                      className="btn btn-sm bg-cyan-400 text-xs"
                    >
                      <img className='h-6 w-6' src={feedback} alt="feedback_image" />
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


