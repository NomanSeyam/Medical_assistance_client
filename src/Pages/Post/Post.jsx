
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import PostList from '../../Component/InstructorsCard/PostList/PostList';
import { Dna } from 'react-loader-spinner';



const Post = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allposts = [], refetch , isLoading:postLoading } = useQuery(['allposts'], async () => {
        const res = await axiosSecure.get('/allposts')
        console.log(res.data)
        return res.data;
    })
    if (postLoading) {
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
        <div className='mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-12'>
                {
                    allposts.map(posts => <PostList
                        key={posts._id}
                        posts={posts}
                        refetch={refetch}
                    ></PostList>)
                }
            </div>
        </div>
    );
};

export default Post;