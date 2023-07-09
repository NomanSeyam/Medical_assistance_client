import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import { Dna } from 'react-loader-spinner';
import { Rating } from '@smastrom/react-rating';
import DoctorCard from '../../Component/InstructorsCard/DoctorCard/DoctorCard';

const Our_doctor = () => {
    const [ourdoctors, setOurdoctors] = useState([''])
    const [searchDoctor, setSearchDoctor] = useState("");
    const [searchResult, setSearchresult] = useState(true)

    const [axiosSecure] = useAxiosSecure()
    const { data: ourdoctor = [], refetch, isLoading: pageLoading } = useQuery(['ourdoctor'], async () => {
        const res = await axiosSecure.get('/ourdoctors')
        setOurdoctors(res.data)
        return res.data;
    })
    console.log(ourdoctors)
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



    const handleSearch = () => {
        fetch(`http://localhost:5000/doctorBySearch/${searchDoctor}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOurdoctors(data);
                if (data.length === 0) {
                    setSearchresult(false)
                } else {
                    setSearchresult(true)
                }

            });
    };
    return (
        <div>
            <div className="search-box p-2 text-center">
                <input
                    onChange={(e) => setSearchDoctor(e.target.value)}
                    type="text"
                    className="py-1 px-4 text-center border-2 rounded-md border-primary w-72"
                    placeholder='Search by name '
                />{" "}
                <button className='w-24  border-2 rounded-md border-primary py-1' onClick={handleSearch}>Search</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-[90vh] overflow-y-scroll my-12'>
                {
                    ourdoctors.map(doctor => <DoctorCard
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