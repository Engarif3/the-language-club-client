import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const MyClass = () => {
    const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/classes');
    return res.data;
  });

  const userEmail = user.email; 
  const filteredUsers = users.filter(user => user.email === userEmail);


  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">Total Classes: {filteredUsers.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.nameClass}</td>
                <td>{user.instructorName}</td>
                <td>{user.email}</td>
                <td className='text-center'>{user.seats}</td>
                <td className='text-center'>{user.price}</td>
                <td className='text-primary'>{user.status? user.status: "pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
