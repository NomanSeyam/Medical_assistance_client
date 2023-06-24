import React from 'react';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import Marquee from "react-fast-marquee";
import DoctorCard from '../../../Component/InstructorsCard/DoctorCard/DoctorCard';


const PopularDoctorsByServicesprovide = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: populardoctors = [], refetch } = useQuery(['populardoctors'], async () => {
        const res = await axiosSecure.get('/populardoctors')
        console.log(res.data)
        return res.data;
    })

    return (
        <div className='my-8'>
            <Marquee>
                <h2 className='text-center my-5 text-2xl font-semibold'>Popular Doctors By Sort by their Services Provide And Patient Feedback</h2>
            </Marquee>

            <div className='grid grid-cols-1 md:grid-cols-2  gap-5 '>
                {
                    populardoctors.map(doctor => <DoctorCard
                        key={doctor._id}
                        doctor={doctor}
                    ></DoctorCard>)
                }
            </div>

        </div>
    );
};

export default PopularDoctorsByServicesprovide;