
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TestingSubSection from './TestingSubSection';

const TestingSection = () => {
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

  console.log(sortedUsers);
  return (
    <div>
      <div className='grid md:grid-cols-3 gap-8 mx-auto md:p-12'>
        {sortedUsers.slice(0, 6).map((item) => (
          <TestingSubSection key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TestingSection;
