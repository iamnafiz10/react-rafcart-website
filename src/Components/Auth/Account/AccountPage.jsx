import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineHome, AiOutlineRight, AiOutlineGift, AiOutlineHeart} from "react-icons/ai";
import {FaRegAddressCard} from 'react-icons/fa';
import {BsPower} from 'react-icons/bs';
import UserImage from '../../../assets/images/roshan_nafiz.png';

function AccountPage(props) {
    return (
        <>
            <section id="account-page-section">
                <div className="breadcrumb container pt-8 flex items-center gap-3">
                    <Link to='/' className="text-primary text-xl">
                        <AiOutlineHome/>
                    </Link>
                    <span className="text-sm text-gray-400">
                        <AiOutlineRight/>
                    </span>
                    <p className="font-medium text-gray-600">
                        My Account
                    </p>
                </div>

                <div className="container pt-4 pb-16">
                    <div className="grid grid-cols-12 items-start gap-6">
                        {/* Sidebar */}
                        <div className="col-span-12 lg:col-span-3">
                            <div className="profile-box px-4 py-3 flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <img src={UserImage}
                                         className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
                                         alt="UserImage"/>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-gray-600">Hello,</p>
                                    <h4 className="text-gray-800 font-medium">Roshan Nafiz</h4>
                                </div>
                            </div>

                            <div
                                className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                                <div className="space-y-2 pl-8">
                                    <Link to='/account' className="relative text-primary block font-medium capitalize">
                                        <span className="absolute -left-8 top-1 text-md">
                                            <FaRegAddressCard/>
                                        </span>
                                        Manage My Account
                                    </Link>

                                    <Link to='/profile' className="block text-md capitalize hover:text-primary transition-all">
                                        Profile Information
                                    </Link>

                                    <Link to='/address' className="block text-md capitalize hover:text-primary transition-all">
                                        Manage Address
                                    </Link>

                                    <Link to='/change-password' className="block text-md capitalize hover:text-primary transition-all">
                                        Change Password
                                    </Link>
                                </div>

                                <div className="space-y-2 pl-8 pt-4">
                                    <div className="relative block font-medium capitalize text-green-600">
                                        <span className="absolute -left-8 top-1 text-xl">
                                            <AiOutlineGift/>
                                        </span>
                                        Payments Methods
                                    </div>

                                    <Link to='/voucher' className="block text-md capitalize hover:text-primary transition-all">
                                        Voucher
                                    </Link>
                                </div>

                                <div className="space-y-2 pl-8 pt-4">
                                    <Link to='/wishlist' className="relative block font-medium capitalize hover:text-primary">
                                        <span className="absolute -left-8 top-1 text-xl">
                                            <AiOutlineHeart/>
                                        </span>
                                        My Wishlist
                                    </Link>
                                </div>

                                <div className="space-y-2 pl-8 pt-4">
                                    <Link to='/' className="relative block font-medium capitalize hover:text-primary">
                                        <span className="absolute -left-8 top-1 text-xl">
                                            <BsPower/>
                                        </span>
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar End*/}

                        {/* Profile Info */}
                        <div className="col-span-12 lg:col-span-9">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="card shadow rounded bg-white px-4 pt-6 pb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-medium text-gray-800 text-lg">Personal Profile</h3>
                                        <Link to='/profile' className="text-primary">Edit</Link>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-gray-700 font-medium">Roshan Nafiz</h4>
                                        <p className="text-gray-800">contact.roshannafiz@gmail.com</p>
                                        <p className="text-gray-800">(+880) 01321764096</p>
                                    </div>
                                </div>

                                <div className="card shadow rounded bg-white px-4 pt-6 pb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-medium text-gray-800 text-lg">Shipping Address</h3>
                                        <Link to='/address' className="text-primary">Edit</Link>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-gray-800">#108/2-Asamcolony, Po-Sopura, Ps-Chondrima, Rajshahi-6203</p>
                                    </div>
                                </div>

                                <div className="card shadow rounded bg-white px-4 pt-6 pb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-medium text-gray-800 text-lg">Billing Address</h3>
                                        <Link to='/address' className="text-primary">Edit</Link>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-gray-800">vill: Kamargaon, Po-Kamargaon, Ps-Tanore, Rajshahi-6230</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Profile Info End */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default AccountPage;