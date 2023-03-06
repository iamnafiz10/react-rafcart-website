import React from 'react';
import IconOne from '../../../assets/images/delivery-van.svg';
import IconTwo from '../../../assets/images/money-back.svg';
import IconThree from '../../../assets/images/service-hours.svg';

function Feature(props) {
    return (
        <>
            <section id="feature-section" className="py-16">
                <div className="container">
                    <div
                        className="w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-center">

                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="col border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                            <div className="icon">
                                <img src={IconOne} className="w-12 h-12 object-contain" alt="IconOne"/>
                            </div>

                            <div className="text-area">
                                <h4 className="font-medium capitalize text-lg">Free Shopping</h4>
                                <p className="text-gray-500 text-sm">Order Over $300</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="col border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                            <div className="icon">
                                <img src={IconTwo} className="w-12 h-12 object-contain" alt="IconTwo"/>
                            </div>

                            <div className="text-area">
                                <h4 className="font-medium capitalize text-lg">Money Returns</h4>
                                <p className="text-gray-500 text-sm">30 Days money return</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="col border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                            <div className="icon">
                                <img src={IconThree} className="w-12 h-12 object-contain" alt="IconThree"/>
                            </div>

                            <div className="text-area">
                                <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                                <p className="text-gray-500 text-sm">Customer support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Feature;