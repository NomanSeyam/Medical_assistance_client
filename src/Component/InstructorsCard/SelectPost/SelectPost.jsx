import React from 'react';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';

const SelectPost = ({ post, index, handleRemovepost, user }) => {
    const [axiosSecure] = useAxiosSecure();
    // console.log(post)
    const { disease_image, bookingID, specilest, doctor_Name, visit, _id, payment_status, visit_Time } = post;


    const handlePaymentAmount = () => {
        const paymentInfo = {
            Paitent_Name: user?.displayName,
            payableAmount: visit,
            Patient_Email: user?.email,
            doctor: doctor_Name,
            specilest: specilest,
            visit_Time: visit_Time,
            _id: _id,
            bookingID: bookingID
        }
        console.log('paymentInfo' , paymentInfo)

        fetch('https://doctors-server-alpha.vercel.app/visitpayment', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(paymentInfo)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('data111', data)
                fetch(`https://doctors-server-alpha.vercel.app/paymentsuccess/${bookingID}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                fetch(`https://doctors-server-alpha.vercel.app/changeSerial/${bookingID}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                window.location.replace(data.url)
            })

        console.log(paymentInfo)
    }

    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{specilest}</td>
            <td>{doctor_Name}</td>
            <td> {visit} tk</td>
            <td> {visit_Time} </td>
            <td><button className='border-2 border-pink-700 font-semibold hover:bg-pink-500 hover:text-white py-1 px-2 rounded' onClick={() => handleRemovepost(_id)}>Cancle Booking</button></td>
            <td>
                <button onClick={handlePaymentAmount} className='border-2 border-pink-700 font-semibold hover:bg-pink-500 hover:text-white py-1 px-4 rounded'>Pay Amout</button>
            </td>

        </tr>
    );
};

export default SelectPost;