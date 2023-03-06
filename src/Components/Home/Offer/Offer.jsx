import React from 'react';
import OfferOneImg from '../../../assets/images/sofa-1.png';
import OfferTwoImg from '../../../assets/images/sofa-2.png';
import {Link} from "react-router-dom";

function Offer(props) {
    return (
        <>
            <section id="offer-section">
                <div className="container py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="col block lg:flex items-center justify-between px-8 py-4 bg-pink-100 group">
                            <div className="text-warp">
                                <h4 className="mb-1 text-primary font-bold">30% offer</h4>
                                <h3 className="mb-1 text-2xl font-bold">Free Shipping</h3>
                                <p className="mb-6 text-sm text-gray-800">Attractive Natural Furniture</p>
                                <Link to='/shop'
                                      className="bg-primary border border-primary px-4 py-2 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">Shop
                                    Now</Link>
                            </div>
                            <img src={OfferOneImg} className="h-52 w-auto lg:w-1/2 float-right lg:float-none group-hover:scale-90 transition-all duration-500" alt="OfferOneImg"/>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1000" className="col block lg:flex items-center justify-between px-8 py-4 bg-gray-200 group">
                            <div className="text-warp">
                                <h4 className="mb-1 text-primary font-bold">50% offer</h4>
                                <h3 className="mb-1 text-2xl font-bold">Flash Sale</h3>
                                <p className="mb-6 text-sm text-gray-800">Attractive Natural Furniture</p>
                                <Link to='/shop'
                                      className="bg-primary border border-primary px-4 py-2 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">Shop
                                    Now</Link>
                            </div>
                            <img src={OfferTwoImg} className="h-52 w-auto lg:w-1/2 float-right lg:float-none group-hover:scale-90 transition-all duration-500" alt="OfferTwoImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Offer;