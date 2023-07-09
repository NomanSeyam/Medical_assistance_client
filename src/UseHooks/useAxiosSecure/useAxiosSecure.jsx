import React, { useEffect } from 'react';
import axios from 'axios';


const useAxiosSecure = () => {
    // const { logOut } = AuthProvaiders(AuthContext)


    const axiosSecure = axios.create({
        // baseURL: 'http://localhost:5000/',
        baseURL: 'https://doctors-server-alpha.vercel.app/',
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            // console.log(token)
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            // console.log( 'config' ,config)
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                // console.log('axiox error respone' , error.response)
                console.log(error.response.data.message)
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // await logOut();
                    // navigate('/login');
                    console.log('user logout')
                }
                return Promise.reject(error);
            }
        );
    }, [axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;