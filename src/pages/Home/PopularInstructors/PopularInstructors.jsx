
import React, { useState } from 'react';
import PopularInstructor from './PopularInstructor';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../components/Loader/Loader';
import useAuth from '../../../hooks/useAuth';

const PopularInstructors = () => {
  const {darkMode} = useAuth();
  const [loading, setLoading] = useState(false)
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['combinedData'], async () => {
    setLoading(true);
    const res = await axiosSecure.get('/combinedData');
    setLoading(false);
    return res.data;
  });

  // Filter users by email to remove duplicates
  const uniqueEmails = [...new Set(users.map(user => user.instructorEmail))];
  const filteredUsers = uniqueEmails.map(email =>
    users.find(user => user.instructorEmail === email)
  );
  

  // Sort users based on seats number
  const sortedUsers = filteredUsers.sort((a, b) => b.seats - a.seats);

  if (loading) {
    return <Loader></Loader>
  }
  return (
    <div >
      <h2 className={darkMode?"text-neutral-50 text-5xl text-center py-12":"text-5xl text-center py-12"}>Popular Instructors</h2>
      <div className='grid md:grid-cols-4 gap-8'>
        {sortedUsers.slice(0, 6).map((item) => (
          <PopularInstructor key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;

