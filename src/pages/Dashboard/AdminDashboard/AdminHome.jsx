import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Fade } from 'react-awesome-reveal';

const AdminHome = () => {
    const {user} = useAuth();
    return (
        <Fade cascade damping={0.4} className='mt-32 flex justify-center '>
            <p className='text-3xl italic'>Welcome to dashboard </p>
            <p className='text-4xl text-purple-900'>{user.displayName} </p>
        </Fade>
    );
};

export default AdminHome;