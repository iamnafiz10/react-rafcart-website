import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineGift, AiOutlineHeart, AiOutlineHome, AiOutlineRight} from "react-icons/ai";
import UserImage from "../../../assets/images/roshan_nafiz.png";
import {FaRegAddressCard} from "react-icons/fa";
import {BsPower} from "react-icons/bs";

function ProfilePage(props) {
    return (
        <>
            <section id="profile-page-section">
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
                        Profile Information
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

                                    <Link to='/profile' className="block text-primary text-md capitalize hover:text-primary transition-all">
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
                        <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
                            <h4 className="text-lg font-medium capitalize mb-4">
                                Profile Information
                            </h4>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label htmlFor="first_name" className="text-gray-600 mb-2 block">First
                                            Name</label>
                                        <input type="text" className="input-box" placeholder="Roshan"/>
                                    </div>

                                    <div className="form-control">
                                        <label htmlFor="last_name" className="text-gray-600 mb-2 block">Last
                                            Name</label>
                                        <input type="text" className="input-box" placeholder="Nafiz"/>
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label htmlFor="email_address" className="text-gray-600 mb-2 block">Email
                                            Address</label>
                                        <input type="email" className="input-box"
                                               placeholder="contact.roshannafiz@gmail.com"/>
                                    </div>

                                    <div className="form-control">
                                        <label htmlFor="phone" className="text-gray-600 mb-2 block">Phone</label>
                                        <input type="number" className="input-box" placeholder="01321764096"/>
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label htmlFor="birthday" className="text-gray-600 mb-2 block">Birthday</label>
                                        <input type="date" className="input-box"/>
                                    </div>

                                    <div className="form-control">
                                        <label htmlFor="gender" className="text-gray-600 mb-2 block">Gender</label>
                                        <select name="gender" className="input-box">
                                            <option defaultValue="Mail">Mail</option>
                                            <option defaultValue="Female">Female</option>
                                        </select>
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

export default ProfilePage;