import React from 'react';
import {Link} from "react-router-dom";
import {SlLocationPin} from "react-icons/sl";
import {BsTelephone} from "react-icons/bs";
import {GoMail} from "react-icons/go";
import PageBanner from '../../assets/images/page-banner.jpg';
import {AiOutlineHome} from "react-icons/ai";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

function ContactPage(props) {
    return (
        <>
            <section id="contact-page-section">
                <div className="page-banner w-full h-96 flex justify-center items-center"
                     style={{
                         backgroundImage: `url(${PageBanner})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat'
                     }}>
                    <div className="banner-content">
                        <h3 className="text-center text-3xl text-white my-3">Contact Us</h3>
                        <div className="breadcrumb flex items-center gap-2">
                            <Link to='/' className="text-primary text-xl">
                                <AiOutlineHome/>
                            </Link>

                            <span className="text-2xl text-white">
                                <MdOutlineKeyboardArrowRight/>
                            </span>

                            <p className="font-medium text-white">
                                Contact us
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container pt-16 mb-10">
                    <div className="grid grid-cols-12 items-start gap-6">

                        {/* Contact Form */}
                        <div className="col-span-12 lg:col-span-8 rounded px-6 pt-5 pb-7">
                            <h4 className="text-3xl font-medium text-gray-800 capitalize mb-3">
                                LEAVE US A MESSAGE
                            </h4>
                            <p className="font-gray-600 text-md mb-6">
                                Use the form below to get in touch with the sales team
                            </p>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label htmlFor="first_name" className="text-gray-600 mb-2 block">First
                                            Name</label>
                                        <input type="text" className="input-box" placeholder=""/>
                                    </div>

                                    <div className="form-control">
                                        <label htmlFor="last_name" className="text-gray-600 mb-2 block">Last
                                            Name</label>
                                        <input type="text" className="input-box" placeholder=""/>
                                    </div>

                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="form-control">
                                        <label htmlFor="email_address" className="text-gray-600 mb-2 block">Email
                                            Address</label>
                                        <input type="email" className="input-box"
                                               placeholder=""/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="form-control">
                                        <label htmlFor="subject" className="text-gray-600 mb-2 block">
                                            Subject
                                        </label>
                                        <input type="text" className="input-box"
                                               placeholder=""/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="form-control">
                                        <label htmlFor="message" className="text-gray-600 mb-2 block">
                                            Message
                                        </label>
                                        <textarea name="message" cols="30" rows="3" className="input-box"></textarea>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <button type="submit"
                                        className="py-2 px-4 text-center text-white bg-primary uppercase border border-primary rounded-md hover:bg-transparent hover:text-primary transition-all">
                                    Send Message
                                </button>
                            </div>
                        </div>
                        {/* Contact Form End */}

                        {/* Info */}
                        <div className="col-span-12 lg:col-span-4 pt-5">
                            <div className="wrapper">
                                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">OUR STORE</h3>
                                <div className="mt-4 space-y-4">
                                    <Link to='/'
                                          className="text-md flex space-x-2 text-gray-500 hover:text-gray-900 block">
                                        <SlLocationPin className="w-5"/>
                                        <span
                                            className="break-all">Kamargaon,Tanore Rajshahi,<br/>Bangladesh 2050 BD</span>
                                    </Link>
                                    <Link to='/'
                                          className="text-md flex items-center space-x-2 text-gray-500 hover:text-gray-900 block">
                                        <BsTelephone className="w-5"/>
                                        <span className="break-all">+880 01321764096</span>
                                    </Link>
                                    <Link to='/'
                                          className="text-md flex items-center space-x-2 text-gray-500 hover:text-gray-900 block">
                                        <GoMail className="w-5"/>
                                        <span className="break-all">contact.roshannafiz@gmail.com</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="wrapper mt-12">
                                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">CAREERS</h3>
                                <div className="mt-4 space-y-4">
                                    <p className="text-md space-x-2 text-gray-500">
                                        If you are interesting to create your website design. Please email us:
                                    </p>
                                    <span
                                        className="break-all text-primary cursor-pointer">contact.roshannafiz@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        {/* Info End*/}

                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactPage;