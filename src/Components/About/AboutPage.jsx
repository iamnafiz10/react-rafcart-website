import React from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {FreeMode} from "swiper";

import PageBanner from "../../assets/images/page-banner.jpg";
import HistoryImage from '../../assets/images/about/about-img.jpg';
import VisionImage from '../../assets/images/about/about-img-2.jpg';
import TMemberOne from '../../assets/images/about/team-1.jpg';
import TMemberTwo from '../../assets/images/about/team-2.jpg';
import TMemberThree from '../../assets/images/about/team-3.jpg';
import TMemberFore from '../../assets/images/about/team-4.jpg';

import BrandOne from '../../assets/images/about/brand1.png';
import BrandTwo from '../../assets/images/about/brand2.png';
import BrandThree from '../../assets/images/about/brand3.png';
import BrandFore from '../../assets/images/about/brand4.png';

import {Link} from "react-router-dom";
import {AiOutlineHome, AiFillFacebook, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {BiLike} from "react-icons/bi";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";


function AboutPage(props) {
    return (
        <>
            <section id="about-page-section">
                <div className="page-banner w-full h-96 flex justify-center items-center"
                     style={{
                         backgroundImage: `url(${PageBanner})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat'
                     }}>
                    <div className="banner-content">
                        <h3 className="text-center text-3xl text-white my-3">About Us</h3>
                        <div className="breadcrumb flex items-center gap-2">
                            <Link to='/' className="text-primary text-xl">
                                <AiOutlineHome/>
                            </Link>

                            <span className="text-2xl text-white">
                                <MdOutlineKeyboardArrowRight/>
                            </span>

                            <p className="font-medium text-white">
                                About us
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container py-16 space-y-20">
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="our-history">
                                <h4 className="text-sm text-primary font-semibold">OUR HISTORY</h4>
                                <h1 className="text-2xl text-gray-800 font-semibold mt-2">
                                    CREATIVE AND NEW FASHION<br/>
                                    TRENDS COLLECTION
                                </h1>
                                <p className="text-md text-gray-800 mt-6">
                                    Fashion is a potent visual marker of our times,” says Caroline Stevenson, head of
                                    cultural and ... “Trend analysis of any given era will reveal society's values and
                                    aspirations.” ... The urge to creative expression runs deep
                                </p>

                                <div className="flex items-center gap-10 mt-10">
                                    <div className="box">
                                        <h3 className="text-4xl text-primary font-semibold">12</h3>
                                        <p className="mt-2 text-gray-800">Years Experience</p>
                                    </div>

                                    <div className="box">
                                        <h3 className="text-4xl text-primary font-semibold">20K</h3>
                                        <p className="mt-2 text-gray-800">Happy Customer</p>
                                    </div>

                                    <div className="box">
                                        <h3 className="text-4xl text-primary font-semibold">100%</h3>
                                        <p className="mt-2 text-gray-800">Clients Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-5">
                            <img src={HistoryImage} className="w-full" alt="HistoryImage"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-5">
                            <img src={VisionImage} className="w-full" alt="VisionImage"/>
                        </div>

                        <div className="col-span-12 lg:col-span-7">
                            <div className="our-history">
                                <h4 className="text-sm text-primary font-semibold">OUR VISION</h4>
                                <h1 className="text-2xl text-gray-800 font-semibold mt-2">
                                    OUR VISION IS SIMPLE - WE EXIST TO<br/>
                                    ACCELERATE OUR CUSTOMERS’ PROGRESS
                                </h1>
                                <p className="text-md text-gray-800 mt-6">
                                    We design and deliver our customers’ digital transformation by bringing together
                                    their vision with our industry knowledge and deep technological expertise. we design
                                    and deliver our customers’ digital transformation
                                </p>

                                <div className="relative mt-8 ml-7">
                                    <span className="text-primary absolute -left-7 top-1">
                                        <BiLike/>
                                    </span>
                                    We build strong relationships
                                </div>

                                <div className="relative mt-4 ml-7">
                                    <span className="text-primary absolute -left-7 top-1">
                                        <BiLike/>
                                    </span>
                                    We encourage initiative and provide opportunity
                                </div>

                                <div className="relative mt-4 ml-7">
                                    <span className="text-primary absolute -left-7 top-1">
                                        <BiLike/>
                                    </span>
                                    We embrace change and creativity
                                </div>

                                <div className="relative mt-4 ml-7">
                                    <span className="text-primary absolute -left-7 top-1">
                                        <BiLike/>
                                    </span>
                                    We champion an environment of honesty
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 uppercase mb-6">MEET WITH OUR TEAM</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="col bg-white rounded overflow-hidden group">
                            <div className="product-image relative group overflow-hidden">
                                <img src={TMemberOne} className="w-full" alt="ProductEight"/>
                                <div
                                    className="hover-icon absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all">

                                    <div
                                        className="icon-wrap flex gap-3 absolute -bottom-10 group-hover:bottom-6 transition-all">
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-all">
                                            <AiFillFacebook className="text-lg"/>
                                        </Link>
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition-all">
                                            <AiFillInstagram className="text-lg"/>
                                        </Link>
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-all">
                                            <AiFillLinkedin className="text-lg"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="product-content text-center pt-4 pb-4 px-4">
                                <Link to='/'>
                                    <h4 className="uppercase font-semibold text-lg text-gray-800 hover:text-primary transition-all">
                                        Jane Cooper
                                    </h4>
                                </Link>
                                <span className="text-sm text-gray-500 py-3 font-nato">
                                    Founder
                                </span>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col bg-white rounded overflow-hidden group">
                            <div className="product-image relative group overflow-hidden">
                                <img src={TMemberTwo} className="w-full" alt="TMemberTwo"/>
                                <div
                                    className="hover-icon absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all">

                                    <div
                                        className="icon-wrap flex gap-3 absolute -bottom-10 group-hover:bottom-6 transition-all">
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-all">
                                            <AiFillFacebook className="text-lg"/>
                                        </Link>
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition-all">
                                            <AiFillInstagram className="text-lg"/>
                                        </Link>
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-all">
                                            <AiFillLinkedin className="text-lg"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="product-content text-center pt-4 pb-4 px-4">
                                <Link to='/'>
                                    <h4 className="uppercase font-semibold text-lg text-gray-800 hover:text-primary transition-all">
                                        Esther Howard
                                    </h4>
                                </Link>
                                <span className="text-sm text-gray-500 py-3 font-nato">
                                    Team Leader
                                </span>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col bg-white rounded overflow-hidden group">
                            <div className="product-image relative group overflow-hidden">
                                <img src={TMemberThree} className="w-full" alt="TMemberThree"/>
                                <div
                                    className="hover-icon absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all">

                                    <div
                                        className="icon-wrap flex gap-3 absolute -bottom-10 group-hover:bottom-6 transition-all">
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-all">
                                            <AiFillFacebook className="text-lg"/>
                                        </Link>
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition-all">
                                            <AiFillInstagram className="text-lg"/>
                                        </Link>
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-all">
                                            <AiFillLinkedin className="text-lg"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="product-content text-center pt-4 pb-4 px-4">
                                <Link to='/'>
                                    <h4 className="uppercase font-semibold text-lg text-gray-800 hover:text-primary transition-all">
                                        Arlene McCoy
                                    </h4>
                                </Link>
                                <span className="text-sm text-gray-500 py-3 font-nato">
                                    Marketing Officer
                                </span>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col bg-white rounded overflow-hidden group">
                            <div className="product-image relative group overflow-hidden">
                                <img src={TMemberFore} className="w-full" alt="TMemberFore"/>
                                <div
                                    className="hover-icon absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all">

                                    <div
                                        className="icon-wrap flex gap-3 absolute -bottom-10 group-hover:bottom-6 transition-all">
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-all">
                                            <AiFillFacebook className="text-lg"/>
                                        </Link>
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition-all">
                                            <AiFillInstagram className="text-lg"/>
                                        </Link>
                                        <Link to='/'
                                              className="text-white text-lg w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-all">
                                            <AiFillLinkedin className="text-lg"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="product-content text-center pt-4 pb-4 px-4">
                                <Link to='/'>
                                    <h4 className="uppercase font-semibold text-lg text-gray-800 hover:text-primary transition-all">
                                        Kristin Wastson
                                    </h4>
                                </Link>
                                <span className="text-sm text-gray-500 py-3 font-nato">
                                    Senior Officer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 uppercase mb-6">OUR PARTNERS</h2>

                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        freeMode={true}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            "@1.50": {
                                slidesPerView: 6,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={BrandOne} className="w-full" alt="BrandOne"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrandTwo} className="w-full" alt="BrandTwo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrandThree} className="w-full" alt="BrandThree"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrandFore} className="w-full" alt="BrandFore"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrandOne} className="w-full" alt="BrandOne"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrandTwo} className="w-full" alt="BrandTwo"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BrandThree} className="w-full" alt="BrandThree"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default AboutPage;