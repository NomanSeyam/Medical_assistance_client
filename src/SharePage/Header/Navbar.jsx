import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaiders/AuthProvaider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }



    const navMenusm = <>
        {
            user &&
            <>
                <li> <Link> <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" /></Link></li>
            </>
        }
        <li><Link to="/">Home</Link></li>
        <li><Link to='/doctors'>Our Doctors</Link></li>
        <li><Link to='/post'>Doctor's Post</Link></li>
        <li><Link to='/donation'>Blood Donation</Link></li>
        <li><Link to='/medicine'> Medicine</Link></li>
        <li><Link to='/dashbord'>Dashbord</Link></li>

        {
            user ?
                <button onClick={handleLogOut} className='hover-btn '>LogOut</button> :
                <Link to='/login'><button className='hover-btn'>login</button> </Link>
        }
    </>
    const navMenuLg = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/doctors'>Our Doctors</Link></li>
        <li><Link to='/post'>Doctor's Post</Link></li>
        <li><Link to='/donation'> Donation</Link></li>
        <li><Link to='/medicine'> Medicine</Link></li>
        <li><Link to='/dashbord'>Dashbord</Link></li>
        {
            user &&
            <>

                <li> <Link to='/dashbord'> <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" /></Link></li>
            </>
        }
    </>




    return (

        <div className=''>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 p-2 shadow bg-base-200  bg-opacity-30 rounded-box w-52 mx-auto text-center z-30 font-semibold text-xl text-white">
                            {navMenusm}
                        </ul>
                    </div>
                    <div className='lg:flex items-center gap-1 hidden'>
                        <img className='w-14' src="https://i.ibb.co/Px5jqmC/health-care-removebg-preview.png" alt="" />
                        <h3 className='brandName  font-semibold font-serif'>Health  Care</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 justify-center items-center text-lg font-semibold">
                        {navMenuLg}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <span className='hidden lg:flex'>
                        {
                            user ?
                                <button onClick={handleLogOut} className='hover-btn'>LogOut</button> :
                                <Link to='/login'><button className='hover-btn'>login</button> </Link>
                        }
                    </span>
                    <img className='w-14 lg:hidden' src="https://i.ibb.co/Px5jqmC/health-care-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>


    );
};

export default Navbar;