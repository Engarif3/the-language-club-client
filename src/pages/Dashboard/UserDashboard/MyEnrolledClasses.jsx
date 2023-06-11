import { Helmet } from 'react-helmet-async';
// import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import MyEnrolledClass from './MyEnrolledClass';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const MyEnrolledClasses = () => {
   
    
//   const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['payments'], async () => {
    const res = await axiosSecure.get('/payments');
    return res.data;
  });
  const paidClasses = users.filter(user => user.status === "paid")
    return (
        <div className='mb-12'>
            <Helmet>
                <title>The Language Club | Classes</title>
            </Helmet>
            <h2 className='text-5xl text-center py-12'>All Classes</h2>
            <div className='grid grid-cols-3 gap-8 px-12'>
            {
                paidClasses.map(paidClass=> <MyEnrolledClass key={paidClass._id} paidClass={paidClass} ></MyEnrolledClass> )
            }
            </div>
           
        </div>
    );
};

export default MyEnrolledClasses;