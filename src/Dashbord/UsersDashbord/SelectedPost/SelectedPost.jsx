import React, { useEffect, useState } from 'react';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import Selectcourse from '../../../Component/InstructorsCard/SelectPost/SelectPost';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import SelectPost from '../../../Component/InstructorsCard/SelectPost/SelectPost';

const SelectedPost = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const { data: selectedoctors = [], refetch, isLoading } = useQuery(['selectedoctors'], async () => {
        const res = await axiosSecure.get(`/selectedoctors/${user?.email}`)
        // console.log(res.data)
        
        return res.data;
    })


    const handleRemovepost = (_id) => {

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
                console.log(_id);
                fetch(`http://localhost:5000/selectedoctors/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='rounded-full font-bold'>
                        <tr className='h-20 bg-gray-300 '>
                            <th>SN</th>
                            <th>Disease</th>
                            <th>Doctors</th>
                            <th>Visited Amount</th>
                            <td>Visited Time</td>
                            <th>Remove</th>
                            <th>Enrolled Confrim</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            selectedoctors.map((post, index) => <SelectPost
                                post={post}
                                key={post._id}
                                index={index}D
                                user={user}
                                handleRemovepost={handleRemovepost}
                            ></SelectPost>)
                        }
                    </tbody>
                </table>
            </div>





        </div>
    );
};

export default SelectedPost;