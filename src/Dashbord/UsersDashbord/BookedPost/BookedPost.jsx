
import { useQuery } from 'react-query';
import useAuth from '../../../UseHooks/useAuth/useAuth';
import useAxiosSecure from '../../../UseHooks/useAxiosSecure/useAxiosSecure';
import { Dna } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const BookedPost = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const { data: bookedpost = [], isLoading: pageLoading } = useQuery(['bookedpost'], async () => {
        const res = await axiosSecure.get(`/bookedpost/${user?.email}`)
        console.log(res.data)
        return res.data;
    })
    console.log(bookedpost)
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

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='rounded-full font-bold'>
                        <tr className='bg-gray-200 h-20 '>
                            <th>SN</th>
                            <th>Disease Example</th>
                            <th>Specilest of</th>
                            <th>Doctor</th>
                            <th>Visited Time</th>
                            <th>Visit</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookedpost.map((post, index) =>
                                <tr key={post._id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td><img className='w-28 h-16 rounded-md' src={post.disease_image} alt="" /></td>
                                    <td>{post.specilest}</td>
                                    <td>{post.doctor_Name}</td>
                                    <td>{post.visit_Time}</td>
                                    <td>{post.visit} tk</td>
                                    <td><Link to='/dashbord/feedback' state={post.bookingID}><button className='hover-btn'>Review</button></Link></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BookedPost;