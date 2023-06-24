import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../UseHooks/useAuth/useAuth';
import Swal from 'sweetalert2';

const Add_Post = () => {
    const { user } = useAuth();
    console.log(user)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)
        const classData = {
            specilest: data.specilest,
            disease_image: data.disease,
            serial: parseInt(data.serial),
            doctor_Name: data.doctor_Name,
            doctor_email: data.doctor_email,
            visit: data.amount,
            visit_Time: data.time,
            doctor_image: user?.photoURL,
            bookingPatient: '0',
            feedback: "",
            rating: "",
            status: "Pending"
        }
        console.log(classData)
        fetch('http://localhost:5000/newpost', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(classData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('data', data)
                    Swal.fire('post Upload')
                    reset()
                }

            })
    };



    return (
        <div className='w-2/4 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Specilest of</span>
                    </label>
                    <input type="text" placeholder="Specilest" className="text-input" {...register("specilest")} />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Upload a Photo about Disease</span>
                    </label>
                    <input type="url" placeholder="Disease" className="text-input" {...register("disease")} />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Maximum Paitent will be seen</span>
                    </label>
                    <input type="number" placeholder="Max Serial" className="text-input" {...register("serial")} />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Time to see the patient</span>
                    </label>
                    <input type="text" placeholder="time Duration" className="text-input" {...register("time")} />

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Doctor</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} readOnly className="text-input" {...register("doctor_Name")} />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Doctor Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} readOnly className="text-input" {...register("doctor_email")} />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pratient Visit</span>
                    </label>
                    <input type="number" placeholder="Amount" className="text-input" {...register("amount")} />

                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <div className=''>
                    <input className='btn btn-primary mt-5  text-input' type="submit" value="Upload Post" />
                </div>

            </form>
        </div>
    );
};

export default Add_Post;