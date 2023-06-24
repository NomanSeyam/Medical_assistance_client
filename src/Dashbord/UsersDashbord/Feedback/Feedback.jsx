import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../UseHooks/useAuth/useAuth';

const Feedback = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(user)
    const bookingID = useLocation();
    const ID = bookingID.state
    // console.log(ID)

    const onSubmit = data => {
        // console.log(data)

        const reviewInfo = {
            patient: user?.displayName,
            patientEmail: user?.email,
            patientProfile: user?.photoURL,
            rating_point: data.rating_point,
            review: data.review,

        }
        console.log(reviewInfo)

        fetch(`http://localhost:5000/review/${ID}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then((dataa) => {
                // console.log(dataa)
                if (dataa.modifiedCount) {
                    Swal.fire('review Successful')
                    navigate('/dashbord/selectedpost')
                    
                }

                console.log('dataa', dataa)
            })
    }


    return (
        <div className='mt-16'>
            <form onSubmit={handleSubmit(onSubmit)} className="-mb-0">

                <div className="form-control -mt-16">
                    <label className="label">
                        <span className="label-text">Rating Out Of 5</span>
                    </label>
                    <select className='text-input' placeholder='Rating out of 5' {...register("rating_point")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Send Review About Us</span>
                    </label>
                    <input placeholder='text messages' className='input input-bordered w-full h-36 text-center ' {...register("review")} required />
                </div>
                <div className='mt-5'>
                    <input type="submit" className='btn w-full bg-slate-700 text-white hover:text-black ' value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Feedback;