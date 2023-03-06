import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineGift, AiOutlineHeart, AiOutlineHome, AiOutlineRight} from "react-icons/ai";
import UserImage from "../../../assets/images/roshan_nafiz.png";
import {FaRegAddressCard} from "react-icons/fa";
import {BsPower} from "react-icons/bs";

function PasswordPage(props) {
    return (
        <>
            <section id="password-page-section">
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
                    <span className="text-sm text-gray-400">
                        <AiOutlineRight/>
                    </span>
                    <p className="font-medium text-gray-600">
                        Change Password
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
                                    <Link to='/account' className="relative block font-medium capitalize">
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

                                    <Link to='/change-password' className="block text-md capitalize text-primary hover:text-primary transition-all">
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
                        <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
                            <h4 className="text-lg font-medium capitalize mb-4">
                                Change Password
                            </h4>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label htmlFor="current_password" className="text-gray-600 mb-2 block">Current Password</label>
                                        <input type="text" placeholder="Enter Current Password" className="input-box"/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label htmlFor="new_password" className="text-gray-600 mb-2 block">New Password</label>
                                        <input type="text" placeholder="New Password" className="input-box"/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label htmlFor="confirm_password" className="text-gray-600 mb-2 block">Confirm Password</label>
                                        <input type="text" placeholder="Confirm Password" className="input-box"/>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button type="submit"
                                        className="py-2 px-4 text-center text-white bg-primary uppercase border border-primary rounded-md hover:bg-transparent hover:text-primary transition-all">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                        {/* Profile Info End */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PasswordPage;