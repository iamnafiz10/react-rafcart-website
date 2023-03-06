import React from 'react';
import CategoryOne from '../../../assets/images/category-1.jpg';
import CategoryTwo from '../../../assets/images/category-2.jpg';
import CategoryThree from '../../../assets/images/category-3.jpg';
import CategoryFore from '../../../assets/images/category-4.jpg';
import CategoryFive from '../../../assets/images/category-5.jpg';
import CategorySix from '../../../assets/images/category-6.jpg';
import {Link} from "react-router-dom";

function Category(props) {
    return (
        <>
            <section id="category-section">
                <div className="container py-8">
                    <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">Shop By Category</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="col relative rounded-sm overflow-hidden group">
                            <img src={CategoryOne} className="w-full" alt="CategoryOne"/>
                            <Link to='/'
                                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-nato font-medium group-hover:bg-opacity-50 transition-all">Bedroom</Link>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col relative rounded-sm overflow-hidden group">
                            <img src={CategoryTwo} className="w-full" alt="CategoryTwo"/>
                            <Link to='/'
                                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-nato font-medium group-hover:bg-opacity-50 transition-all">Mattresses</Link>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col relative rounded-sm overflow-hidden group">
                            <img src={CategoryThree} className="w-full" alt="CategoryThree"/>
                            <Link to='/'
                                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-nato font-medium group-hover:bg-opacity-50 transition-all">Office</Link>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col relative rounded-sm overflow-hidden group">
                            <img src={CategoryFore} className="w-full" alt="CategoryFore"/>
                            <Link to='/'
                                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-nato font-medium group-hover:bg-opacity-50 transition-all">Outdoor</Link>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col relative rounded-sm overflow-hidden group">
                            <img src={CategoryFive} className="w-full" alt="CategoryFive"/>
                            <Link to='/'
                                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-nato font-medium group-hover:bg-opacity-50 transition-all">Lounges
                                & Sofas</Link>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="col relative rounded-sm overflow-hidden group">
                            <img src={CategorySix} className="w-full" alt="CategorySix"/>
                            <Link to='/'
                                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-nato font-medium group-hover:bg-opacity-50 transition-all">Living
                                & Dining</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;