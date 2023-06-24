import React from 'react';
import { useLocation } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Review = () => {
    const stateData = useLocation();
    const rating = stateData.state.rating;
    const { patient, patientEmail, patientProfile, rating_point, review } = rating
    console.log(rating)
    return (
        <div>
            <div className='flex w-2/5 mx-auto items-center justify-between mt-14'>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={patientProfile} alt="patient Profile" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{patient}</div>
                        <div className="text-sm opacity-50">{patientEmail}</div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating_point}
                            readOnly
                        />
                        <p>{rating_point}</p>
                    </div>
                    <p>{review}</p>
                </div>
            </div>
        </div >
    );
};

export default Review;