import React from 'react';
import useAuth from '../../UseHooks/useAuth/useAuth';
import { NavLink } from 'react-router-dom';

const AdminDashbord = () => {
    const { user } = useAuth()
    return (
        <>
            <li className='mt-12'><NavLink to='/dashbord/adminhome'> Admin home </NavLink></li>
            <li><NavLink to='/dashbord/manageuser'> Manage Users </NavLink></li>
            <li><NavLink to='/dashbord/managepost'> Manage Post </NavLink></li>
            <li><NavLink to='/dashbord/adddoctor'> Add Doctor</NavLink></li>
            <li><NavLink to='/dashbord/addmedicine'> Add Medicine</NavLink></li>
            <li><NavLink to='/dashbord/webanalysis'>Web Analysis</NavLink></li>
        </>
    );
};

export default AdminDashbord;