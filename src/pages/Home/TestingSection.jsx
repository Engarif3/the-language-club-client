import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TestingSection = () => {
    const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });
    return (
        <div >
            <h2 className='text-center text-3xl'>Just for Testing</h2>
            <div className='grid grid-cols-3 gap-3'>
            {users.map(user => <p key={user._id}><img className='w-56 h-56' src={user.photo} alt="" /></p> )}
        </div>
        </div>
    );
};

export default TestingSection;