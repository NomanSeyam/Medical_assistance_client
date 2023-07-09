import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Slider = () => {
    return (
        <div >
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/yfMYJ86/online-marketing-h-Igeo-Qj-S-i-E-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />

                    <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">

                        <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                            <h1 className='text-6xl font-extrabold'>Exploring the Rhythm of Sound </h1>
                            <p className='capitalize text-xl'>Race into action with our high-speed toy cars that will leave you breathless. From sleek sports cars to rugged off-roaders, we have them all!</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className=" btn btn-outline btn-primary"> <FaAngleDoubleLeft /> </a>
                        <a href="#slide2" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /> </a>
                    </div>

                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XDyBznm/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
                    <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                        <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                            <h1 className='text-6xl font-extrabold'>Harmonious Melodies </h1>
                            <p className='capitalize text-xl'>Discover timeless classics and iconic models that car enthusiasts will love. Build your dream collection with our range of vintage and collectible cars.</p>


                        </div>
                    </div>
                    <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft /></a>
                        <a href="#slide3" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/KF4FmBv/html-template-preview-57159.jpg" className="w-full h-[calc(100vh-75px)]" />
                    <div className="absolute flex items-center   h-full top-[132px] -left-4 lg:left-12 ">
                        <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                            <button className='btn btn-primary px-8 py-2'>learne more</button>

                        </div>
                    </div>
                    <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft /></a>
                        <a href="#slide4" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/MnVBZQM/jjj.jpg" className="w-full h-[calc(100vh-75px)]" />
                    <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                        <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                            <h1 className='text-6xl font-extrabold'>ake to the Skies!</h1>
                            <p className='capitalize text-xl'>Explore the world of aviation with our fantastic selection of toy planes and helicopters. Let your imagination soar high above the clouds!</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft /></a>
                        <a href="#slide1" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /></a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Slider;