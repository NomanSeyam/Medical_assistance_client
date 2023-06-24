import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { set, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvaiders/AuthProvaider';
import SocalLogin from '../../SharePage/SocalLogin/SocalLogin';
import Lottie from "lottie-react";
import loginAnimation from "../../assets/signup.json";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const SignUp = () => {
    const navigate = useNavigate()
    const [hidePass, setHidePass] = useState(true);
    const [doctor, setDoctor] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        // if (data.password === data.Confrim_password) {
        //     setError("password don't match")
        //     return
        // }

        createUser(data.email, data.password)
            .then((result) => {
                updateUserProfile(data.name, data.photo)
                    .then(updateData => {
                        navigate('/login')
                    })
                    .catch(error => {
                        console.log(error)
                    })
                const user = result.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });


    };
    console.log(error)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right" className="text-center lg:text-left">
                        <Lottie className='h-[700px]' animationData={loginAnimation}></Lottie>
                    </div>
                    <div  data-aos="fade-left" className="card flex-shrink-0 w-1/2 p-8  shadow-2xl bg-base-100 h-[80vh] overflow-y-auto"  >
                        <form onSubmit={handleSubmit(onSubmit)} className="-mb-0 flex flex-col items-center p-4">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="text-input" {...register("name")} required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="text-input" {...register("email")} required />

                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={hidePass ? 'password' : 'text'} placeholder=" password" className="text-input" {...register("password")} required />
                                </div>
                                <span className='text-error'>{error && error}</span>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type={hidePass ? 'password' : 'text'} placeholder="Confirm password" className="text-input" {...register("Confrim_password")} required />

                                </div>
                                <button onClick={() => setHidePass(!hidePass)} className='flex  items-center gap-1 ml-3 my-2'>
                                    {/*  */}
                                    {hidePass ? <><FaEye /> Show Password</> : <><FaEyeSlash />  Hide Password</>}
                                </button>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" placeholder="Photo URL" className="text-input" {...register("photo")} required />
                            </div>
                            <p className=''> <small>if you are a doctor <span onClick={() => setDoctor(!doctor)} className='underline link text-blue-500'>Give More Info</span> </small> </p>
                            {doctor &&
                                <>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Upload your Docs</span>
                                        </label>
                                        <input type="url" placeholder="Document" className="text-input" {...register("docs")} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Specialist of </span>
                                        </label>
                                        <input type="text" placeholder="Specialist of" className="text-input" {...register("specialist")} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">MBBS complete from </span>
                                        </label>
                                        <input type="text" placeholder="Collage Name" className="text-input" {...register("mbbs")} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">MBBS Batch </span>
                                        </label>
                                        <input type="text" placeholder="batch" className="text-input" {...register("batch")} required />
                                    </div>
                                </>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select className='text-input' {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input type="number" placeholder="Contact Number" className="text-input" {...register("phone")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Present address" className="text-input" {...register("address")} />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary w-80' type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-sm ml-5'>Already have An Account ? <Link to='/login' className='underline text-blue-500'>Login</Link></p>
                        <SocalLogin></SocalLogin>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;