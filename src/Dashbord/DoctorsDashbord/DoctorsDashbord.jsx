import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../UseHooks/useAuth/useAuth';

const DoctorsDashbord = () => {
    const { user } = useAuth()
    return (
        <>
            <div className='mb-12 text-center lowercase'>
                <li className='text-2xl font-semibold uppercase my-4'>WelCome DR. {user.displayName}</li>
                <li><img className='w-28 h-[100px] rounded-full mx-auto' src={user?.photoURL} alt="" /> </li>
                <li >{user?.displayName}</li>
                <li >{user?.email}</li>
            </div>
            <li><NavLink to='/dashbord/addpost'>  Add Post </NavLink></li>
            <li><NavLink to='/dashbord/mypost'> My Post</NavLink></li>
        </>
    );
};

export default DoctorsDashbord;