import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import successAnimation from '../../../../public/97987-success.json'
const CheckOutFormSuccess = () => {
    const { trans_Id } = useParams();
    console.log(trans_Id)
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-[90vh]'>

                <div>
                    <Lottie className='w-96' animationData={successAnimation}></Lottie>
                </div>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Payment Successfull',
                        1000,
                        `Payment Transjection ID ${trans_Id}`,
                        1000,
                        'Thanks You',
                        1000,
                    ]}
                    speed={20}
                    style={{ fontSize: '2em', fontWeight: '700px' }}
                    repeat={Infinity}
                />
                <Link to='/'><button className='hover-btn'>Go to Home</button></Link>
            </div>
        </div>
    );
};

export default CheckOutFormSuccess;