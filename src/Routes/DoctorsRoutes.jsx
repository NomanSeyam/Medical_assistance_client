import useDoctors from "../UseHooks/useDoctors/useDoctors";



const DoctorsRoutes = ({ children }) => {
    const [isDoctor, isDoctorLoading] = useDoctors();
    if (isDoctorLoading) {
        return <div className='flex justify-center items-center'>

            <h2 className='text-3xl  font-bold'>Loading Instuctor Page...</h2>
        </div>
    }
    if (isDoctor) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default DoctorsRoutes;