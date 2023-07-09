import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Add_Medicine = () => {
    
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://doctors-server-alpha.vercel.app/addmedicine', {
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
                        <span className="label-text">Medicine Name</span>
                    </label>
                    <input type='text' placeholder='Medicine Name' className='text-input-full ' {...register("name")} required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Medicine Group</span>
                    </label>
                    <input type='text' placeholder='Medicine Group' className='text-input-full ' {...register("group")} required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Company</span>
                    </label>
                    <input type='text' placeholder='Company Name' className='text-input-full ' {...register("company")} required />
                </div>

                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Purpose Of</span>
                    </label>
                    <input type='text' placeholder='Purpose Of' className='text-input-full ' {...register("purpose")} required />
                </div>

                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Price per Unit</span>
                    </label>
                    <input type='text' placeholder='price' className='text-input-full ' {...register("price_per_unit")} required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Expire Date</span>
                    </label>
                    <input type='date' placeholder='Validity' className='text-input-full ' {...register("expire_date")} required />
                </div>
               
                
                <div className='mt-5'>
                    <input type="submit" className='btn w-full bg-slate-700 text-white hover:text-black ' value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Add_Medicine;