import React from 'react';
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { Dna } from 'react-loader-spinner';
import { Rating } from '@smastrom/react-rating';
import DoctorCard from '../../Component/InstructorsCard/DoctorCard/DoctorCard';

const Our_doctor = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: ourdoctor = [], refetch, isLoading: pageLoading } = useQuery(['ourdoctor'], async () => {
        const res = await axiosSecure.get('/ourdoctors')
        console.log(res.data)
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
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-[90vh] overflow-y-scroll my-12'>
                {
                    ourdoctor.map(doctor => <DoctorCard
                        key={doctor._id}
                        doctor={doctor}
                    ></DoctorCard>

                    )
                }
            </div>
        </div>
    );
};

export default Our_doctor;