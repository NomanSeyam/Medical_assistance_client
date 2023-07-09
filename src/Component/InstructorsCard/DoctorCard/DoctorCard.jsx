import { Rating } from '@smastrom/react-rating';
import React from 'react';

const DoctorCard = ({doctor}) => {
    return (
        <div className="card card-side w-[600px] bg-base-200 h-72 p-2 transition-all hover:shadow-2xl hover:scale-105">
            <figure><img className='w-52 h-full transition hover:scale-125' src={doctor.image} alt="Movie" /></figure>
            <div className="card-body capitalize">
                <h2 className="card-title">{doctor.name}</h2>
                <h5>Doctor Of : <span className='text-success font-bold'>{doctor.specialty}</span></h5>
                <p>MBBS complete From <span className='font-semibold'>{doctor.medicalCollege}</span></p>
                <p>Batch : {doctor.batch}</p>
                <p>Achivement : <span className='uppercase'>{doctor.degrees}</span></p>
                <p className='flex gap-2 items-center'>Patient Review :
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={doctor.rating}
                        readOnly
                    />

                </p>

            </div>
        </div>
    );
};

export default DoctorCard;