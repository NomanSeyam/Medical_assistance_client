import React, { useState } from 'react';
import { FaPenFancy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pendingpost = ({ tutorial, index, handleAppproveClass, handledenyClass }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tutorial.doctor_Name}</td>
            <td>{tutorial.specilest}</td>
            <td>{tutorial.visit} tk</td>
            <td className='flex flex-col gap-2'>
                <button onClick={() => handleAppproveClass(tutorial._id)} className='style-btn'>Appprove</button>
                <button onClick={() => handledenyClass(tutorial._id)} className='style-btn'>Deny</button>
            </td>
            <td >
                <Link to='/payment' data={tutorial._id}> <FaPenFancy title="Send Feedback" className='ml-5 border-2 hover:bg-slate-700 hover:text-white text-5xl p-2 rounded-md' />
                </Link>
            </td>

        </tr >
    );
};

export default Pendingpost;