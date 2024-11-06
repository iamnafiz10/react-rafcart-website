import React from 'react';
import Logo from '../../assets/images/head/logo.svg';
import FooterPayment from '../../assets/images/payment-method.png';
import {Link} from "react-router-dom";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaGithubSquare} from 'react-icons/fa';
import {SlLocationPin} from 'react-icons/sl';
import {BsTelephone} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';

function Footer(props) {
    return (
        <>
            <section id="footer-section" className="mt-8">
                <hr/>
                <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="col footer-text col-span-1 space-y-8">
                                <img src={Logo} className="w-30" alt="Logo"/>
                                <p className="text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Enim minima nihil nobis qui tempore.</p>
                                <div className="flex space-x-4">
                                    <Link to='/' className="text-xl text-gray-400 hover:text-gray-500">
                                        <FaFacebookSquare/>
                                    </Link>
                                    <Link to='/' className="text-xl text-gray-400 hover:text-gray-500">
                                        <FaInstagramSquare/>
                                    </Link>
                                    <Link to='/' className="text-xl text-gray-400 hover:text-gray-500">
                                        <FaLinkedinIn/>
                                    </Link>
                                    <Link to='/' className="text-xl text-gray-400 hover:text-gray-500">
                                        <FaGithubSquare/>
                                    </Link>
                                </div>
                            </div>

                            <div className="col footer-links col-span-2 grid grid-cols-2 gap-8">

                                <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:mt-0 gap-8">
                                    <div className="col wrapper">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">MY ACCOUNT</h3>
                                        <div className="mt-4 space-y-4">
                                            <Link to='/account'
                                                  className="text-sm text-gray-500 hover:text-gray-900 block">Account</Link>
                                            <Link to='/profile'
                                                  className="text-sm text-gray-500 hover:text-gray-900 block">Profile</Link>
                                            <Link to='/address'
                                                  className="text-sm text-gray-500 hover:text-gray-900 block">Address</Link>
                                            <Link to='/change-password'
                                                  className="text-sm text-gray-500 hover:text-gray-900 block">Password</Link>
                                        </div>
                                    </div>

                                    <div className="col wrapper">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">QUICK LINKS</h3>
                                        <div className="mt-4 space-y-4">
                                            <Link to='/about-us'
                                                  className="text-sm text-gray-500 hover:text-gray-900 block">About
                                                Us</Link>
                                            <Link to='/contact'
                                                  className="text-sm text-gray-500 hover:text-gray-900 block">
                                                Contact
                                                </Link>
                                            <Link to='/shop'
                                                  className="text-sm text-gray-500 hover:text-gray-900 block">
                                                Shop
                                                </Link>
                                            <Link to='/voucher'
                                                  className="text-sm text-gray-500 hover:text-gray-900 block">
                                                Voucher
                                              </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-1 mt-8 lg:mt-0 gap-8">
                                    <div className="col wrapper">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Contact</h3>
                                        <div className="mt-4 space-y-4">
                                            <div
                                               className="text-sm flex space-x-2 text-gray-500 hover:text-gray-900 block">
                                                <SlLocationPin className="w-5"/>
                                                <span className="break-all">Tanore Rajshahi, Bangladesh 2050 BD</span>
                                            </div>
                                            <div
                                               className="text-sm flex items-center space-x-2 text-gray-500 hover:text-gray-900 block">
                                                <BsTelephone className="w-5"/>
                                                <span className="break-all">+880 01321764096</span>
                                            </div>
                                            <div
                                               className="text-sm flex items-center space-x-2 text-gray-500 hover:text-gray-900 block">
                                                <GoMail className="w-5"/>
                                                <span className="break-all">roshansaihamnafiz@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>

                <div className="copyright bg-gray-800 py-4">
                    <div className="container block md:flex items-center justify-between">
                        <p className="text-white">
                            © 2023 - All Rights Reserved Design By
                            <a href="https://roshannafiz.com" className="text-primary underline ml-4" target="_blank"
                               rel="noreferrer">
                                Roshan Nafiz
                            </a>
                        </p>
                        <div className="footer-image mt-4 md:mt-0">
                            <img src={FooterPayment} className="h-5" alt="FooterPayment"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
