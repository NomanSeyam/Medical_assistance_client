import React, { useState } from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import useAdmin from '../../../UseHooks/useAdmin/useAdmin';
import Swal from 'sweetalert2';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import useDoctors from '../../../UseHooks/useDoctors/useDoctors';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import { Link } from 'react-router-dom';


const PostList = ({ posts, refetch }) => {
    const { specilest, disease_image, serial, doctor_Name, doctor_email, _id, visit, doctor_image, bookingPatient, feedback, rating, visit_Time } = posts;
    const { user } = useAuth();
    const selectedCourse = { specilest, visit_Time, disease_image, doctor_Name, _id, visit, email: user?.email };
    const [disableBtn, setDisableBtn] = useState(false);
    const [isadmin] = useAdmin();
    const [isDoctor] = useDoctors();
    const [axiosSecure] = useAxiosSecure();

    const handleSelectCourse = () => {

        const selectCourse = {
            specilest: selectedCourse.specilest,
            disease_image: selectedCourse.disease_image,
            doctor_Name: selectedCourse.doctor_Name,
            visit: selectedCourse.visit,
            visit_Time: selectedCourse.visit_Time,
            payment_status: 'unpaid',
            bookingID: selectedCourse._id,
            patient: user?.email
        }
        console.log(selectCourse)



        fetch(`https://doctors-server-alpha.vercel.app/selectdoctor`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(selectCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('data', data)
                    refetch()
                    setDisableBtn(true)
                    Swal.fire(
                        'Select Successfull Please Payment As Soon As Possible'
                    )
                }

            })
    }

    return (
        <Slide >
            <div className={posts.seats == 0 ? "card  card-compact w-96 bg-red-600 shadow-xl" : "card border-2 card-compact w-96 bg-base-100 hover:shadow-xl"}>
                <figure><img className='w-96 h-72 rounded-md' src={disease_image} alt="Shoes" /></figure>

                <div className="card-body">
                    <h2 className="card-title">Specilest of : {specilest}</h2>
                    <h2 className="card-title">Doctor : {doctor_Name}</h2>
                    <h2 className="">Visited Time : {visit_Time}</h2>
                    <h2 className="">Available Serial : {serial}</h2>
                    <h2 className="">Booked  : {bookingPatient}</h2>
                    <p>Visit :  {visit} tk</p>
                    <p>Contact info :  {doctor_email} </p>
                    <div className='flex justify-between'>
                        {
                            user ?
                                <>
                                    <button disabled={disableBtn || isadmin === true || isDoctor === true || posts.seats == 0} onClick={handleSelectCourse} className="hover-btn text-end">Select This Doctors</button>

                                    {rating.patient &&
                                        <Link state={posts} to='/review'>
                                            <button className="hover-btn px-12">Reviews</button>
                                        </Link>}</>
                                :
                                <Link to='/login' className='w-full'>
                                    <button className='hover-btn w-full'>Login Please</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </Slide>

    );
};

export default PostList;