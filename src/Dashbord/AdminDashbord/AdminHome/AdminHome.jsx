import React from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';

const AdminHome = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div className='mb-12 text-center '>
            <p className='mb-8'><img className='w-28 rounded-full mx-auto' src={user?.photoURL} alt="" /> </p>
            <p className=''> Admin :{user?.displayName}</p>
            <p >{user?.email}</p>
            <p >{user?.role}</p>
        </div>
    );
};

export default AdminHome;