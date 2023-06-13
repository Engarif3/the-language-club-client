import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Lesson from './Lesson';



const PopularClasses = () => {
   

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/classes');
    return res.data;
  });
  const instructorUsers = users.filter(user => user.status === "approved")
  const sortedLessons = instructorUsers.sort((a, b) => b.seats - a.seats)
    return (
        <div className='mb-12'>
            <Helmet>
                <title>The Language Club | Classes</title>
            </Helmet>
            <h2 className='text-5xl text-center py-12'>Popular Classes</h2>
            <div className='grid md:grid-cols-3 gap-8 px-12'>
            {
                sortedLessons.slice(0,6).map(course => <Lesson key={course._id} course={course} ></Lesson> )
            }
            </div>
           
        </div>
    );
};

export default PopularClasses;
