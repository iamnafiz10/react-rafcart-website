import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineHome, AiOutlineRight} from "react-icons/ai";

function CheckoutPage(props) {
    return (
        <>
            <section id="checkout-page-section">
                <div className="breadcrumb container pt-8 flex items-center gap-3">
                    <Link to='/' className="text-primary text-xl">
                        <AiOutlineHome/>
                    </Link>
                    <span className="text-sm text-gray-400">
                        <AiOutlineRight/>
                    </span>
                    <p className="font-medium text-gray-600">
                        Checkout
                    </p>
                </div>

                <div className="container pb-16 pt-8">
                    <div className="grid grid-cols-12 gap-6 items-start">
                        {/* Checkout Form */}
                        <div className="col-span-8 border border-gray-200 p-4 rounded">
                            <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label htmlFor="first_name" className="text-gray-600 mb-2 block">
                                            First Name
                                            <span className="text-primary">*</span>
                                        </label>
                                        <input type="text" className="input-box"/>
                                    </div>

                                    <div className="form-control">
                                        <label htmlFor="last_name" className="text-gray-600 mb-2 block">
                                            Last Name
                                            <span className="text-primary">*</span>
                                        </label>
                                        <input type="text" className="input-box"/>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="company_name" className="text-gray-600 mb-2 block">
                                        Company Name
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" className="input-box"/>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="country" className="text-gray-600 mb-2 block">
                                        County/Region
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" className="input-box"/>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="state" className="text-gray-600 mb-2 block">
                                        Street Address
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" className="input-box"/>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="city" className="text-gray-600 mb-2 block">
                                        Town/City
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" className="input-box"/>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="zip_code" className="text-gray-600 mb-2 block">
                                        Zip Code
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" className="input-box"/>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="phone" className="text-gray-600 mb-2 block">
                                        Phone Number
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" className="input-box"/>
                                </div>

                                <div className="form-control">
                                    <label htmlFor="email" className="text-gray-600 mb-2 block">
                                        Email Address
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input type="email" className="input-box"/>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col-span-4 border border-gray-200 p-4 rounded">
                            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">PRODUCT</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <div>
                                        <h5 className="text-gray-800 font-medium uppercase">Knitted Shoes</h5>
                                        <p className="text-sm text-gray-600">Size: M</p>
                                    </div>

                                    <p className="text-gray-600">
                                        x2
                                    </p>

                                    <p className="text-gray-800 font-medium">
                                        $50.20
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    <div>
                                        <h5 className="text-gray-800 font-medium uppercase">PELAGIA LOUNGE</h5>
                                        <p className="text-sm text-gray-600">Size: M</p>
                                    </div>

                                    <p className="text-gray-600">
                                        x3
                                    </p>

                                    <p className="text-gray-800 font-medium">
                                        $70.00
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-between border-b border-gray-200 py-4">
                                <div>
                                    <h3 className="text-gray-800 font-bold uppercase">SUBTOTAL</h3>
                                </div>

                                <p className="text-gray-800 font-medium">
                                    $140.00
                                </p>
                            </div>

                            <div className="flex justify-between border-b border-gray-200 py-4">
                                <div>
                                    <h3 className="text-gray-800 font-bold uppercase">SHIPPING</h3>
                                </div>

                                <p className="text-gray-800 font-medium">
                                    FREE
                                </p>
                            </div>

                            <div className="flex justify-between py-4">
                                <div>
                                    <h3 className="text-gray-800 font-bold uppercase">TOTAL</h3>
                                </div>

                                <p className="text-gray-800 font-bold">
                                    $140
                                </p>
                            </div>

                            <div className="flex items-center mt-2 mb-4">
                                <input type="checkbox" id="agreement" className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"/>
                                <label htmlFor="agreement" className="text-gray-600 ml-3 text-sm">
                                    Agree to our <Link to='/' className="text-primary">terms & conditions</Link>
                                </label>
                            </div>

                            <div className="place-button">
                                <Link to='/'
                                      className="block w-full py-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition-all">
                                    Place Order
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CheckoutPage;