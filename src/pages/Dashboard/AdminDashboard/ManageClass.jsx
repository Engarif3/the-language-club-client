import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import accept from "../../../assets/accept.png"
import deny from "../../../assets/deny.png"

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
      <h3 className="text-3xl font-semibold my-4">Total Classes: {classes.length}</h3>
      <div>
        <table className="table-auto table-zebra mx-4 px-8 w-full">
          {/* head */}
          <thead className="bg-indigo-400 h-12">
            <tr>
              <th className="pl-12 rounded-l-lg">#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th className="pr-12 rounded-r-lg">Feedback</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <td className="pl-12">{index + 1}</td>
                <td>
                  <img className="w-8 h-8 ml-2 rounded-md" src={classItem.classImage} alt="" />
                </td>
                <td>{classItem.nameClass}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.email}</td>
                <td className="text-center">{classItem.seats}</td>
                <td className="text-center">${classItem.price}</td>
                <td className={classItem.status==="denied"?"text-red-600":classItem.status==="approved"?"text-green-500":"text-indigo-600 animate-bounce"}>{classItem.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(classItem._id, index)}
                    className="btn btn-sm btn-primary text-xs"
                    disabled={classItem.disabled}
                  >
                    <img className='h-6 w-6' src={accept} alt="accept-image" />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeny(classItem._id, index)}
                    className="btn btn-sm btn-primary text-xs"
                    disabled={classItem.disabled}
                  >
                    <img className='h-6 w-6' src={deny} alt="deny_image" />
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


