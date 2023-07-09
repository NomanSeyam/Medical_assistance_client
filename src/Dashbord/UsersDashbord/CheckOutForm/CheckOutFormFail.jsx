import React from 'react';
import Lottie from "lottie-react";
import failedAnimation from '../../../../public/107311-failed-red.json'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const CheckOutFormFail = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[90vh]'>

            <div>
                <Lottie className='w-96' animationData={failedAnimation}></Lottie>
            </div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Payment failed...',
                    1000,
                    'Payment cancle...',
                    1000,
                    'Please try again...',
                    1000,
                ]}
                speed={20}
                style={{ fontSize: '2em' , fontWeight:'700px' }}
                repeat={Infinity}
            />
             <Link to='/'><button className='hover-btn'>Go to Home</button></Link>
        </div>
    );
};

export default CheckOutFormFail;