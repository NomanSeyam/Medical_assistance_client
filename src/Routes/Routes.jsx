import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import UserLayout from '../Layout/UserLayout';
import DashBord from '../Layout/DashBord';
import UserLogin from '../Pages/Login/UserLogin';
import AdminHome from '../Dashbord/AdminDashbord/AdminHome/AdminHome';
import ManageUsers from '../Dashbord/AdminDashbord/manageUsers/ManageUsers';
import Web_Analysis from '../Dashbord/AdminDashbord/Web_Analysis/Web_Analysis';
import PrivateRoutes from './PrivateRoutes';
import AdminRoutes from './adminRoutes';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp/SignUp';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DoctorsRoutes from './DoctorsRoutes';
import UsersDashbord from '../Dashbord/UsersDashbord/UsersDashbord';
import Add_Post from '../Dashbord/DoctorsDashbord/Add_Post/Add_Post';
import My_Post from '../Dashbord/DoctorsDashbord/My_Post/My_Post';
import ManagePost from '../Dashbord/AdminDashbord/ManageClass/ManagePost';
import Post from '../Pages/Post/Post';
import SelectedPost from '../Dashbord/UsersDashbord/SelectedPost/SelectedPost';
import BookedPost from '../Dashbord/UsersDashbord/bookedPost/bookedPost';
import Payment_History from '../Dashbord/UsersDashbord/Payment_History/Payment_History';
import CheckOutFormSuccess from '../Dashbord/UsersDashbord/CheckOutForm/CheckOutFormSuccess';
import CheckOutFormFail from '../Dashbord/UsersDashbord/CheckOutForm/CheckOutFormFail';
import Feedback from '../Dashbord/UsersDashbord/Feedback/Feedback';
import Review from '../Dashbord/DoctorsDashbord/Review/Review';
import Our_doctor from '../Pages/Our_doctor/Our_doctor';
import Donation from '../Pages/Donation/Donation';
import Add_Doctor from '../Dashbord/AdminDashbord/Add_Doctor/Add_Doctor';
import Add_Medicine from '../Dashbord/AdminDashbord/Add_Medicine/Add_Medicine';
import Medicine from '../Pages/Medicine/Medicine';


const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout></UserLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <UserLogin></UserLogin>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/doctors',
                element: <Our_doctor></Our_doctor>
            },
            {
                path: '/post',
                element: <Post></Post>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/medicine',
                element: <Medicine></Medicine>
            },
        ]
    },
    {
        path: '/dashbord',
        element: <PrivateRoutes><DashBord></DashBord></PrivateRoutes>,
        children: [
            {
                path: 'usershome',
                element: <UsersDashbord></UsersDashbord>
            },
            {
                path: 'selectedpost',
                element: <SelectedPost></SelectedPost>
            },
            {
                path: 'bookedpost',
                element: <BookedPost></BookedPost>
            },
            {
                path: 'payment/successful/:trans_Id',
                element: <CheckOutFormSuccess></CheckOutFormSuccess>
            },
            {
                path: 'payment/fail',
                element: <CheckOutFormFail></CheckOutFormFail>
            },
            {
                path: 'paymenthistory',
                element: <Payment_History></Payment_History>
            },
            {
                path: 'feedback',
                element: <Feedback></Feedback>
            },
            {
                path: 'addpost',
                element: <DoctorsRoutes><Add_Post></Add_Post></DoctorsRoutes>
            },
            {
                path: 'mypost',
                element: <DoctorsRoutes><My_Post></My_Post></DoctorsRoutes>
            },
            {
                path: 'adminhome',
                element: <AdminRoutes> <AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: 'manageuser',
                element: <AdminRoutes> <ManageUsers></ManageUsers></AdminRoutes>
            },
            {
                path: 'managepost',
                element: <AdminRoutes><ManagePost></ManagePost></AdminRoutes>
            },
            {
                path: 'adddoctor',
                element: <AdminRoutes><Add_Doctor></Add_Doctor></AdminRoutes>
            },
            {
                path: 'addmedicine',
                element: <AdminRoutes><Add_Medicine></Add_Medicine></AdminRoutes>
            },
            {
                path: 'webanalysis',
                element: <AdminRoutes><Web_Analysis></Web_Analysis></AdminRoutes>
            },
        ]
    }
]);

export default router;