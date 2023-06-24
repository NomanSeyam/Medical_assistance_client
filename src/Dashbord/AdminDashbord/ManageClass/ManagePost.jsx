import React from 'react';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Pendingpost from './Pendingpost';

const ManagePost = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: posts = [], refetch, isLoading } = useQuery(['posts'], async () => {
        const res = await axiosSecure.get('/pendingpost')
        console.log(res.data)
        return res.data;
    })
    // console.log(posts)

    const handleAppproveClass = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/approvepost/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
                alert('approved')

            })
    }
    const handledenyClass = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure to Deny the class?',
            text: "feedback the reason",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deny it'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/denypost/${id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
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
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Doctor</th>
                            <th>Specilest Of</th>
                            <th>Visit</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((tutorial, index) => <Pendingpost
                                key={(tutorial._id)}
                                tutorial={tutorial}
                                index={index}
                                handleAppproveClass={handleAppproveClass}
                                handledenyClass={handledenyClass}
                            ></Pendingpost>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePost;