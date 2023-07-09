import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';
import { Dna } from 'react-loader-spinner';
import useAuth from '../../UseHooks/useAuth/useAuth';
import { Link } from 'react-router-dom';

const Donation = () => {


    const [blood, setBlood] = useState([''])
    const [searchDoctor, setSearchDoctor] = useState("");
    const [searchResult, setSearchresult] = useState(true)
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();


    const { data: bloods = [], refetch, isLoading: pageLoading } = useQuery(['blood'], async () => {
        const res = await axiosSecure.get('/blood')
        setBlood(res.data)
        return res.data;
    })
    if (pageLoading) {
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
    const onSubmit = data => {
        console.log(data)
        fetch('https://doctors-server-alpha.vercel.app/addblood', {
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
                    refetch()
                }
            })
    };
    const handleSearch = () => {
        fetch(`http://localhost:5000/bloodBySearch/${searchDoctor}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBlood(data);
                if (data.length === 0) {
                    setSearchresult(false)
                } else {
                    setSearchresult(true)
                }

            });
    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center py-4 px-8 rounded mx-auto bg-base-200' >
            <div className='w-full px-12 lg:p-0  text-center md:w-1/4 h-[90vh] md:h-auto' >
                <h3 className='text-3xl font-semibold text-center text-violet-600 -mt-16'>Donate Blood</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Blood Group</span>
                        </label>
                        <select className='text-input-full ' placeholder='Rating out of 5' {...register("blood")} required>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Loaction</span>
                        </label>
                        <input type="text" placeholder="where are from locate" className="text-input-full" {...register("loaction")} required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Previous Donate date</span>
                        </label>
                        <input type="date" placeholder="" className="text-input-full" {...register("previous_date")} />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donation date</span>
                        </label>
                        <input type="date" placeholder="" className="text-input-full" {...register("donation_date")} required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donar Conatct Info</span>
                        </label>
                        <input type="text" placeholder="Donar number / email" className="text-input-full" {...register("contact")} required />

                    </div>

                    <div className='form-control'>
                        <input className='btn btn-primary mt-5  text-input-full' type="submit" value="Upload Post" />
                    </div>

                </form>
            </div>

            <div className='w-full border4 md:w-3/4 h-[95vh]  md:h-[80vh] overflow-y-scroll overflow-x-hidden  ml-5'>
                <div className="search-box p-2 text-center">
                    <input
                        onChange={(e) => setSearchDoctor(e.target.value)}
                        type="text"
                        className="py-1 px-4 text-center border-2 rounded-md border-primary w-72"
                        placeholder='Search by Blood Group '
                    />{" "}
                    <button className='w-24  border-2 rounded-md border-primary py-1' onClick={handleSearch}>Search</button>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-12 justify-center '>
                    {
                        blood?.map(blood =>
                            <div key={blood._id} className="card w-[350px]  mx-auto bg-base-200 hover:shadow-xl border-2">
                                <div className="card-body">
                                    <h2 className="card-title">Blood Group : <span className='font-semibold text-violet-700'>{blood.blood}</span></h2>
                                    <div className='space-y-2'>
                                        <div className='flex items-center '>
                                            <p className=' -mr-2'>Previous Donation Date :</p>
                                            <p className='font-semibold text-orange-700'>{blood.previous_date}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className=' -mr-8'>Next Donation Date :</p>
                                            <p className='font-semibold text-orange-700'>{blood.donation_date}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className=' -mr-24'> Donate Location :</p>
                                            <p className='font-semibold text-orange-700'>{blood.loaction}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className=' -mr-28'> Contact :</p>
                                            <p className='font-semibold text-orange-700'>{blood.contact}</p>
                                        </div>

                                    </div>

                                    <div className="card-actions justify-end">
                                        {
                                            user ? <button className="hover-btn w-full">Booking</button> : <Link to='/login' className='w-full'>
                                                <button className='hover-btn w-full'>User Not Available Login Please</button>
                                            </Link>
                                        }


                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Donation;