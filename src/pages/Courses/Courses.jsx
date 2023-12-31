import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Course from './Course';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';
import useAuth from '../../hooks/useAuth';


const Courses = () => {
  const {darkMode} = useAuth();
  const [loading, setLoading] = useState([]);  
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['classes'], async () => {
    setLoading(true);
    const res = await axiosSecure.get('/classes');
    setLoading(false);
    return res.data;
  });
  const instructorUsers = users.filter(user => user.status === "approved")

  if(loading){
    return <Loader></Loader>;
  }
    return (
        <div className='mb-12'>
            <Helmet>
                <title>The Language Club | Courses</title>
            </Helmet>
            <h2 className={darkMode?"text-neutral-50 text-5xl text-center py-12":"text-5xl text-center py-12"}>All Courses</h2>
            <div className='grid md:grid-cols-4 gap-8'>
            {
                instructorUsers.map(course => <Course key={course._id} course={course} ></Course> )
            }
            </div>
           
        </div>
    );
};

export default Courses;