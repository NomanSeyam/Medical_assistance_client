import React from 'react';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import { useQuery } from 'react-query';
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const My_Post = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()

    const { data: myposts = [], refetch, isLoading } = useQuery(['myposts'], async () => {
        const res = await axiosSecure.get(`/myposts/${user?.email}`)
        console.log(res.data)
        return res.data;
    })

    const removeMyClass = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-school-data.vercel.app/class/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch()
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Disease</th>
                            <th>Total Booked</th>
                            <th>Available Serial</th>
                            <th>Remove</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myposts.map((AllPost, index) => <tr>
                                <td>{index + 1}</td>
                                {/* <td><img className='w-24 h-16 rounded' src={AllPost.disease_image} alt="" /></td> */}
                                <td>{AllPost.specilest}</td>
                                <td>{AllPost.bookingPatient}</td>
                                <td>{AllPost.serial}</td>
                                <td className=''>
                                    <button onClick={() => removeMyClass(AllPost._id)} className='bg-transparent hover:bg-transparent '>
                                        <FaTrashAlt className='text-2xl text-error hover:text-black' />
                                    </button>
                                </td>
                                <th>
                                    {
                                        AllPost.status === 'denied' ? <span className='px-2 style-btn '> Admin FeedBack</span> : AllPost.status === 'approved' ? <span className='text-success'>{AllPost.status}</span> : <span className='text-pink-600'>{AllPost.status}...</span>
                                    }
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default My_Post;