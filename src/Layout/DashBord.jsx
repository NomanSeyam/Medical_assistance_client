import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaMailBulk } from 'react-icons/fa';
import AdminDashbord from '../Dashbord/AdminDashbord/AdminDashbord';
import useAdmin from '../UseHooks/useAdmin/useAdmin';
import Footer from '../SharePage/Footer/Footer';
import useDoctors from '../UseHooks/useDoctors/useDoctors';
import UsersDashbord from '../Dashbord/UsersDashbord/UsersDashbord';
import DoctorsDashbord from '../Dashbord/DoctorsDashbord/DoctorsDashbord';
import { Dna } from 'react-loader-spinner';
const DashBord = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isDoctor, isDoctorLoading] = useDoctors();
    // console.log(isDoctor)
    // console.log(isAdmin)
    if (isAdminLoading || isDoctorLoading) {
        return <div className='flex justify-center items-center mt-60'>
            <Dna
                visible={true}
                height="200"
                width=""
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    }
    return (
        <div>
            <div className="drawer lg:drawer-open  mb-12">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-12  ml-8">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gray-100  h-[100vh] uppercase text-base-content space-y-1">
                        {/* <!-- Sidebar content here --> */}
                        {
                            isAdmin ? <AdminDashbord></AdminDashbord> : isDoctor ? <DoctorsDashbord></DoctorsDashbord> : <UsersDashbord></UsersDashbord>
                        }


                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome /> HOME</NavLink></li>
                        <li><NavLink to='/doctors'>Our Doctors</NavLink></li>
                        <li><NavLink to='/post'>Doctor's Post</NavLink></li>
                        <li><NavLink to='/donation'>Blood Donation</NavLink></li>
                        <li><NavLink to='/medicine'> Medicine</NavLink></li>


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBord;