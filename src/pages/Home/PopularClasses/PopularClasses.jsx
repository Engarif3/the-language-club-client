import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Lesson from './Lesson';
import { useState } from 'react';
import Loader from '../../../components/Loader/Loader';
import useAuth from '../../../hooks/useAuth';



const PopularClasses = () => {
  const {darkMode } = useAuth();
   
  const [loading, setLoading] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['classes'], async () => {
    setLoading(true);
    const res = await axiosSecure.get('/classes');
    setLoading(false);
    return res.data;
  });
  const instructorUsers = users.filter(user => user.status === "approved")
  const sortedLessons = instructorUsers.sort((a, b) => b.seats - a.seats)

  if (loading) {
    return <Loader></Loader>
  }
    return (
        <div className='mb-12'>
            <Helmet>
                <title>The Language Club | Courses</title>
            </Helmet>
            <h2 className={darkMode?"text-neutral-50 text-5xl text-center py-12":"text-5xl text-center py-12"}>Popular Courses</h2>
            <div className='grid md:grid-cols-4 gap-8'>
            {
                sortedLessons.slice(0,8).map(course => <Lesson key={course._id} course={course} ></Lesson> )
            }
            </div>
           
        </div>
    );
};

export default PopularClasses;
