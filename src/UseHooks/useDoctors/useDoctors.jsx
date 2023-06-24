import { useQuery } from "react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useDoctors = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // console.log('axiosSecure' , axiosSecure);

    const { data: isDoctor, isLoading: isDoctorLoading } = useQuery({
        queryKey: ['isDoctor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/doctor/${user?.email}`);
            // console.log('is Doctor response', res)
            return res.data.doctor;
        }
    })
    return [isDoctor, isDoctorLoading]
};

export default useDoctors;