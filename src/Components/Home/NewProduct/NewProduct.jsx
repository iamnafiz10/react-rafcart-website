import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import {Navigation} from "swiper";

import {CiSearch, CiHeart} from 'react-icons/ci';
import {AiFillStar} from 'react-icons/ai';
import {BsCart2, BsStarHalf} from 'react-icons/bs';
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';
import {MdOutlineClose} from "react-icons/md";
import {VscHeart} from "react-icons/vsc";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedinIn} from "react-icons/fa";
import {getAllProductData} from "../../../Data/AllProduct";
import {CartContext} from "../../../Context/cartContext";

// Toaster Message //
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewProduct(props) {
    // Get Product Data
    const [allProducts] = useState(getAllProductData());

    // Add To Cart
    const {addToCart} = useContext(CartContext);

    // For Pop Up Product View / Pop Up Slider
    const [popupContent, setPopupContent] = useState([]);
    const [popUpToggle, setPopUpToggle] = useState(false);
    const changeContent = (allProduct) => {
        setPopupContent([allProduct]);
        setPopUpToggle(!popUpToggle);
    };

    const [activeImageIndexp, setActiveImageIndexp] = useState(0);
    const [activeThumbnailIndexp, setActiveThumbnailIndexp] = useState(0);

    function handleClickP(index) {
        setActiveImageIndexp(index);
        setActiveThumbnailIndexp(index);
    }

    // 👇 Pop Up Quantity Change
    const [quantity, setQuantity] = useState(1);

    const handlePlusClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleMinusClick = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    // 👇 Pop Up Quantity Going To 1 When User Close Pop Up
    useEffect(() => {
        if (!popUpToggle) { // popup is closed
            setQuantity(1);
        }
    }, [popUpToggle]);

    // Toaster Message Added Product On Cart
    const notify = () => {
        toast.success('Added To Your Cart!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <>
            <section id="new-product" className="">
                <div className="container py-12">
                    <h2 className="text-3xl font-bold text-gray-800 uppercase mb-6">TOP NEW ARRIVAL</h2>

                    {/* Swiper Slider */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        rewind={true}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper relative"
                    >
                        {
                            allProducts.slice(0, 7).map((allProduct, index) => (
                                <SwiperSlide key={index}>
                                    <div className="col bg-white shadow rounded overflow-hidden group">
                                        <div className="product-image relative">
                                            <img src={allProduct.image} className="w-full" alt="ProductOne"/>
                                            <div
                                                className="hover-icon absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                                <div onClick={() => changeContent(allProduct)}
                                                     className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all">
                                                    <CiSearch/>
                                                </div>
                                                <Link to='/wishlist'
                                                      className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition-all">
                                                    <CiHeart/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="product-content pt-4 pb-4 px-4">
                                            <Link to={`/product/${allProduct.id}`}>
                                                <h4 className="uppercase font-semibold text-xl text-gray-800 hover:text-primary transition-all">
                                                    {allProduct.title}
                                                </h4>
                                            </Link>
                                            <span
                                                className="text-sm text-gray-500 py-3 font-nato">
                                                {allProduct.category}
                                            </span>
                                            <div className="price flex items-baseline mb-1 mt-2 space-x-2 font-nato">
                                                <p className="text-xl text-primary font-bold">${allProduct.price}</p>
                                                <p className="text-sm text-gray-400 line-through">${allProduct.regularPrice}</p>
                                            </div>

                                            <div className="rating flex items-center">
                                                <div className="flex gap-1 text-md text-yellow-400">
                                                    <span><AiFillStar/></span>
                                                    <span><AiFillStar/></span>
                                                    <span><AiFillStar/></span>
                                                    <span><AiFillStar/></span>
                                                    <span><BsStarHalf/></span>
                                                </div>
                                                <div className="text-xs text-gray-500 ml-3">
                                                    ({allProduct.review})
                                                </div>
                                            </div>
                                        </div>

                                        <button onClick={() => {
                                            addToCart(allProduct);
                                            notify();
                                        }}
                                                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition-all">
                                            Add To Cart
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <div
                            className="button-next-slide absolute top-1/2 right-0 z-10 w-8 h-8 rounded-full bg-gray-200 text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                            <BsChevronRight/>
                        </div>
                        <div
                            className="button-prev-slide absolute top-1/2 z-10 left-0 w-8 h-8 rounded-full bg-gray-200 text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                            <BsChevronLeft/>
                        </div>
                    </Swiper>

                </div>

                {/* Product Pop Up */}
                {popUpToggle &&
                    <div onClick={changeContent}
                         className="pop_up_container z-50 pt-[4%] fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]">
                        <div onClick={(event) => event.stopPropagation()}
                             className="pop_up_body py-10 container bg-white w-[100%] h-[92%] m-auto overflow-y-auto">
                            <div onClick={changeContent} className="pup_up_header float-right cursor-pointer">
                                <MdOutlineClose className="text-2xl hover:text-primary"/>
                            </div>
                            {
                                popupContent.map((popProduct, index) => {
                                    return (
                                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div className="col">
                                                <div className="product-single-image">
                                                    <img src={popProduct.images[activeImageIndexp]} className="w-full"
                                                         alt="SliderImage"/>
                                                </div>
                                                <div className="product-gallery-image">
                                                    <div className="grid grid-cols-5 gap-4 mt-4">
                                                        {
                                                            popProduct.images.map((image, index) => (
                                                                <div key={index}>
                                                                    <img src={image} alt="productImage"
                                                                         width="100"
                                                                         className={`border ${activeThumbnailIndexp === index ? 'border-primary' : ''}`}
                                                                         onClick={() => handleClickP(index)}
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="product-content">
                                                    <h2 className="text-2xl font-medium uppercase mb-2">
                                                        {popProduct.title}
                                                    </h2>

                                                    <div className="rating flex items-center mb-4">
                                                        <div className="flex gap-1 text-sm text-yellow-400">
                                                            <span><AiFillStar/></span>
                                                            <span><AiFillStar/></span>
                                                            <span><AiFillStar/></span>
                                                            <span><AiFillStar/></span>
                                                            <span><AiFillStar/></span>
                                                        </div>
                                                        <div className="text-xs text-gray-500 ml-3">
                                                            ({popProduct.review} Reviews)
                                                        </div>
                                                    </div>

                                                    <div className="product-details space-y-2">
                                                        <p className="text-gray-800 font-semibold space-x-2">
                                                            <span>Availability</span>
                                                            <span className="text-green-600">In Stock</span>
                                                        </p>

                                                        <p className="space-x-2">
                                                            <span className="font-semibold text-gray-800">Brand: </span>
                                                            <span className="text-gray-600">Apex</span>
                                                        </p>

                                                        <p className="space-x-2">
                                                            <span
                                                                className="font-semibold text-gray-800">Category: </span>
                                                            <span className="text-gray-600">{popProduct.category}</span>
                                                        </p>

                                                        <p className="space-x-2">
                                                            <span className="font-semibold text-gray-800">SKU: </span>
                                                            <span className="text-gray-600">{popProduct.sku}</span>
                                                        </p>
                                                    </div>

                                                    <div
                                                        className="price flex items-baseline mb-1 mt-4 space-x-2 font-nato">
                                                        <p className="text-2xl text-primary font-bold">
                                                            ${popProduct.price * quantity}
                                                        </p>
                                                        <p className="text-md text-gray-400 line-through">${popProduct.regularPrice}</p>
                                                    </div>

                                                    <div className="description mt-4">
                                                        <p className="text-gray-600">
                                                            {popProduct.short_description}
                                                        </p>
                                                    </div>

                                                    <div className="size-filter pt-6">
                                                        <h3 className="text-md text-gray-800 mb-3 uppercase font-bold">Size</h3>
                                                        <div className="flex items-center gap-2">
                                                            <div className="size-selector-popup">
                                                                <input type="radio" name="size" id="size-xs-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="size-xs-p"
                                                                       className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                                                    XS
                                                                </label>
                                                            </div>

                                                            <div className="size-selector-popup">
                                                                <input type="radio" defaultChecked name="size"
                                                                       id="size-s-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="size-s-p"
                                                                       className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                                                    S
                                                                </label>
                                                            </div>

                                                            <div className="size-selector-popup">
                                                                <input type="radio" name="size" id="size-m-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="size-m-p"
                                                                       className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                                                    M
                                                                </label>
                                                            </div>

                                                            <div className="size-selector-popup">
                                                                <input type="radio" name="size" id="size-l-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="size-l-p"
                                                                       className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                                                    L
                                                                </label>
                                                            </div>

                                                            <div className="size-selector-popup">
                                                                <input type="radio" name="size" id="size-xl-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="size-xl-p"
                                                                       className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                                                    XL
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="color-filter pt-6">
                                                        <h3 className="text-md text-gray-800 mb-3 uppercase font-bold">Color</h3>
                                                        <div className="flex items-center gap-2">
                                                            <div className="color-selector-popup">
                                                                <input type="radio" name="color" id="color-red-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="color-red-p"
                                                                       className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                                                       style={{backgroundColor: "red"}}></label>
                                                            </div>

                                                            <div className="color-selector-popup">
                                                                <input type="radio" name="color" id="color-white-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="color-white-p"
                                                                       className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                                                       style={{backgroundColor: "white"}}></label>
                                                            </div>

                                                            <div className="color-selector-popup">
                                                                <input type="radio" defaultChecked name="color"
                                                                       id="color-black-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="color-black-p"
                                                                       className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                                                       style={{backgroundColor: "black"}}></label>
                                                            </div>

                                                            <div className="color-selector-popup">
                                                                <input type="radio" name="color" id="color-yellow-p"
                                                                       className="hidden"/>
                                                                <label htmlFor="color-yellow-p"
                                                                       className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                                                       style={{backgroundColor: "yellow"}}></label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="quantity pt-6">
                                                        <h3 className="text-md text-gray-800 mb-3 uppercase font-bold">Quantity</h3>
                                                        <div
                                                            className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                                            <div onClick={handleMinusClick}
                                                                 className="minus h-8 w-8 text-xl flex items-center hover:bg-gray-300 justify-center cursor-pointer select-none">
                                                                -
                                                            </div>
                                                            <div
                                                                className="minus h-8 w-8 text-sm flex items-center justify-center">
                                                                {quantity}
                                                            </div>
                                                            <div onClick={handlePlusClick}
                                                                 className="minus h-8 w-8 text-xl flex items-center hover:bg-gray-300 justify-center cursor-pointer select-none">
                                                                +
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="product-button flex gap-4 border-b border-gray-200 pb-5 pt-6">
                                                        <button onClick={() => {
                                                            addToCart(popProduct, quantity);
                                                            notify();
                                                        }}
                                                                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition-all">
                                                            <BsCart2/> Add To Cart
                                                        </button>

                                                        <Link to='/wishlist'
                                                              className="border border-primary text-primary px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
                                                            <VscHeart/> Wishlist
                                                        </Link>
                                                    </div>

                                                    <div className="social-share flex gap-4 pt-6">
                                                        <Link to='/'
                                                              className="text-md text-gray-400 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:text-gray-500">
                                                            <FaFacebookSquare/>
                                                        </Link>
                                                        <Link to='/'
                                                              className="text-md text-gray-400 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:text-gray-500">
                                                            <FaInstagramSquare/>
                                                        </Link>
                                                        <Link to='/'
                                                              className="text-md text-gray-400 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:text-gray-500">
                                                            <FaLinkedinIn/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </section>
            <ToastContainer
                theme="colored"
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default NewProduct;