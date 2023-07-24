
import React from 'react';
import PopularInstructor from './PopularInstructor';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['combinedData'], async () => {
    const res = await axiosSecure.get('/combinedData');
    return res.data;
  });

  // Filter users by email to remove duplicates
  const uniqueEmails = [...new Set(users.map(user => user.instructorEmail))];
  const filteredUsers = uniqueEmails.map(email =>
    users.find(user => user.instructorEmail === email)
  );
  

  // Sort users based on seats number
  const sortedUsers = filteredUsers.sort((a, b) => b.seats - a.seats);
  return (
    <div>
      <h2 className="text-5xl text-center py-12">Popular Instructors</h2>
      <div className='grid md:grid-cols-3 gap-6 px-8'>
        {sortedUsers.slice(0, 6).map((item) => (
          <PopularInstructor key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;

