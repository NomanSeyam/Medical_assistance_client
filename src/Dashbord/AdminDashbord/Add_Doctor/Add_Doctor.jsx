import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Add_Doctor = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/ourdoctors', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
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
        <div className='mt-16'>
            <form onSubmit={handleSubmit(onSubmit)} className="-mb-0">


                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Doctor Name</span>
                    </label>
                    <input type='text' placeholder='Doctor Name' className='text-input-full ' {...register("name")} required />
                </div>

                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Collage / Institute</span>
                    </label>
                    <input type='text' placeholder='Collage / Institute name' className='text-input-full ' {...register("medicalCollege")} required />
                </div>

                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Doctor of</span>
                    </label>
                    <input type='text' placeholder='Specialty' className='text-input-full ' {...register("specialty")} required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Batch</span>
                    </label>
                    <input type='number' placeholder='Batch' className='text-input-full ' {...register("batch")} required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Doctor Degrees</span>
                    </label>
                    <input type='text' placeholder='degrees' className='text-input-full ' {...register("degrees")} required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Doctor Profile</span>
                    </label>
                    <input type='url' placeholder='Image Link' className='text-input-full ' {...register("image")} required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Rating Out Of 5</span>
                    </label>
                    <select className='text-input-full' placeholder='Rating out of 5' {...register("rating")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='mt-5'>
                    <input type="submit" className='btn w-full bg-slate-700 text-white hover:text-black ' value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Add_Doctor;