import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineGift, AiOutlineHeart, AiOutlineHome, AiOutlineRight} from "react-icons/ai";
import {FaRegAddressCard} from "react-icons/fa";
import {RiDeleteBinLine} from "react-icons/ri";
import {BsPower, BsCartPlus} from "react-icons/bs";
import UserImage from "../../assets/images/roshan_nafiz.png";
import WishlistOne from "../../assets/images/wishlist/wishlist1.png";
import WishlistTwo from "../../assets/images/wishlist/wishlist2.png";

function WishlistPage(props) {
    return (
        <>
            <section id="wishlist-page-section">
                <div className="breadcrumb container pt-8 flex items-center gap-3">
                    <Link to='/' className="text-primary text-xl">
                        <AiOutlineHome/>
                    </Link>
                    <span className="text-sm text-gray-400">
                        <AiOutlineRight/>
                    </span>
                    <p className="font-medium text-gray-600">
                        My Wishlist
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
                                    <Link to='/wishlist' className="relative block font-medium text-primary capitalize hover:text-primary">
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

                        {/* Wishlist Info */}
                        <div className="col-span-12 lg:col-span-9 space-y-4">
                            <div
                                className="block lg:flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                                <div className="wishlist-image w-28 flex-shrink-0">
                                    <img src={WishlistOne} className="w-full" alt="WishlistOne"/>
                                </div>

                                <div className="mt-3 lg:mt-0 wishlist-content w-full lg:w-1/3">
                                    <h2 className="text-gray-800 text-md font-medium uppercase">
                                        CASUAL CHARGING LAPTOP
                                    </h2>
                                    <p className="text-gray-500 text-sm mt-2">Availability: <span
                                        className="text-green-600">In Stock</span></p>
                                </div>

                                <div className="mt-3 lg:mt-0 text-primary text-md font-semibold">$320.00</div>

                                {/* Tab / Mobile */}
                                <div className="lg:hidden flex items-center justify-between mt-4 lg:mt-0">
                                    <Link to='/cart'
                                          className="px-6 py-2 flex items-center text-center text-sm text-white bg-primary border border-primary rounded uppercase font-nato font-medium hover:bg-transparent hover:text-primary transition-all">
                                        <BsCartPlus className="mr-2"/>
                                        Add To Cart
                                    </Link>

                                    <div className="text-gray-600 text-xl cursor-pointer hover:text-primary">
                                        <RiDeleteBinLine/>
                                    </div>
                                </div>

                                {/* Desktop */}
                                <Link to='/cart'
                                      className="hidden lg:flex px-6 py-3 items-center text-center lg:text-xs xl:text-sm text-white bg-primary border border-primary rounded uppercase font-nato font-medium hover:bg-transparent hover:text-primary transition-all">
                                    <BsCartPlus className="mr-2"/>
                                    Add To Cart
                                </Link>

                                <div className="hidden lg:flex text-gray-600 text-xl cursor-pointer hover:text-primary">
                                    <RiDeleteBinLine/>
                                </div>
                            </div>

                            <div
                                className="block lg:flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                                <div className="wishlist-image w-28 flex-shrink-0">
                                    <img src={WishlistTwo} className="w-full" alt="WishlistTwo"/>
                                </div>

                                <div className="mt-3 lg:mt-0 wishlist-content w-full lg:w-1/3">
                                    <h2 className="text-gray-800 text-md font-medium uppercase">
                                        WIRELESS KEYBOARD
                                    </h2>
                                    <p className="text-gray-500 text-sm mt-2">Availability: <span
                                        className="text-red-600">Out Of Stock</span></p>
                                </div>

                                <div className="mt-3 lg:mt-0 text-primary text-md font-semibold">$500.30</div>

                                {/* Tab / Mobile */}
                                <div className="lg:hidden flex items-center justify-between mt-4 lg:mt-0">
                                    <Link to='/cart'
                                          className="px-6 py-2 cursor-not-allowed flex items-center text-center text-sm text-white bg-red-400 border border-red-400 rounded uppercase font-nato font-medium hover:bg-transparent hover:text-primary transition-all">
                                        <BsCartPlus className="mr-2"/>
                                        Add To Cart
                                    </Link>

                                    <div className="text-gray-600 text-xl cursor-pointer hover:text-primary">
                                        <RiDeleteBinLine/>
                                    </div>
                                </div>

                                {/* Desktop */}
                                <Link to='/cart'
                                      className="hidden cursor-not-allowed lg:flex px-6 py-3 items-center text-center lg:text-xs xl:text-sm text-white bg-red-400 border border-red-400 rounded uppercase font-nato font-medium hover:bg-transparent hover:text-primary transition-all">
                                    <BsCartPlus className="mr-2"/>
                                    Add To Cart
                                </Link>

                                <div className="hidden lg:flex text-gray-600 text-xl cursor-pointer hover:text-primary">
                                    <RiDeleteBinLine/>
                                </div>
                            </div>

                        </div>
                        {/* Wishlist Info End */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default WishlistPage;