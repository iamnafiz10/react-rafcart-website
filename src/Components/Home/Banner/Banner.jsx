import React from 'react';
import BannerImage from '../../../assets/images/banner-1.jpg';
import {Link} from "react-router-dom";

function Banner(props) {
    return (
        <>
            <section id="banner-section" className="bg-cover bg-no-repeat bg-center py-36"
                     style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="container">
                    <h1 className="text-2xl md:text-6xl text-gray-800 font-bold md:font-medium mb-4 capitalize">
                        Best Collection For<br/>
                        Home Decoration
                    </h1>
                    <p className="hidden md:block">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum<br/> iste perferendis
                        sint tenetur!
                    </p>
                    <p className="block md:hidden">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum iste perferendis
                        sint tenetur!
                    </p>
                    <div className="mt-12">
                        <Link to='/shop'
                              className="bg-primary border border-primary px-8 py-3 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">Shop
                            Now</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;