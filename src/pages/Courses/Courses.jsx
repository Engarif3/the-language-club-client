import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Course from './Course';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const Courses = () => {
   
    
    const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/classes');
    return res.data;
  });
  const instructorUsers = users.filter(user => user.status === "approved")
    return (
        <div className='mb-12'>
            <Helmet>
                <title>The Language Club | Classes</title>
            </Helmet>
            <h2 className='text-5xl text-center py-12'>All Classes</h2>
            <div className='grid grid-cols-3 gap-8 px-12'>
            {
                instructorUsers.map(course => <Course key={course._id} course={course} ></Course> )
            }
            </div>
           
        </div>
    );
};

export default Courses;