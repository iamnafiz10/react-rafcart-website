import React from 'react';
import {Link} from "react-router-dom";

function LoginPage(props) {
    return (
        <>
            <section id="login-page-section">
                <div className="container py-16">
                    <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                        <div className="head-content">
                            <h2 className="text-2xl uppercase font-bold mb-1">Login</h2>
                            <p className="text-gray-600 mb-6 text-sm">Login if you a a returing customer</p>
                        </div>

                        <form action="#">
                            <div className="space-y-4">
                                <div className="form-control">
                                    <label htmlFor="email" className="text-gray-600 mb-3 block">Email Address</label>
                                    <input type="email"
                                           className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                           placeholder="Enter Your Email Address"/>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="password" className="text-gray-600 mb-3 block">Password</label>
                                    <input type="password"
                                           className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                           placeholder="Your Password"/>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center">
                                    <input type="checkbox" id="agreement"
                                           className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer">Remember
                                        Me</label>
                                </div>

                                <div className="forgot">
                                    <Link to='/' className="text-primary">Forgot Password?</Link>
                                </div>
                            </div>

                            <div className="login-button mt-4">
                                <button type="submit"
                                      className="bg-primary block w-full border border-primary uppercase px-4 py-2 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">
                                    Login
                                </button>
                            </div>
                        </form>

                        <div className="login-with mt-6 flex justify-center relative">
                            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                                Or Login With
                            </div>
                            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                        </div>

                        <div className="social-login flex items-center gap-4 mt-4">
                            <Link to='/'
                                  className="w-1/2 py-3 text-center text-white bg-blue-800 rounded uppercase font-nato font-medium text-sm hover:bg-blue-700">
                                Facebook
                            </Link>

                            <Link to='/'
                                  className="w-1/2 py-3 text-center text-white bg-pink-600 rounded uppercase font-nato font-medium text-sm hover:bg-pink-500">
                                Google
                            </Link>
                        </div>

                        <p className="mt-4 text-gray-600 text-center">
                            Don't have an account.?
                            <Link to='/register' className="text-primary">Register Now</Link>
                        </p>

                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginPage;