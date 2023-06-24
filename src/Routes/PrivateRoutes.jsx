import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvaiders/AuthProvaider';
import { Dna } from 'react-loader-spinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    // console.log(user)
    if (loading) {
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
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;