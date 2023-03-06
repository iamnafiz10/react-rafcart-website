import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {AiFillStar, AiOutlineHome, AiOutlineRight} from 'react-icons/ai';
import {BsListUl, BsGrid, BsStarHalf, BsCart2} from 'react-icons/bs';
import {CiHeart, CiSearch} from "react-icons/ci";
import {MdOutlineClose} from "react-icons/md";
import {getAllProductData} from "../../Data/AllProduct";
import {VscHeart} from "react-icons/vsc";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedinIn} from "react-icons/fa";
import {CartContext} from '../../Context/cartContext';

// Toaster Message //
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ShopPage({product, onClose}) {
    // Get Product Data
    const [allProducts] = useState(getAllProductData());

    // 👇️ Toggle class on click Show Category Bar button
    const ClickShowCategoryBar = event => {
        const category = document.getElementById('category_bar');
        category.classList.add('show_category');
    };

    // 👇️ Toggle class on click Close Category Bar button
    const ClickCloseCategoryBar = event => {
        const category = document.getElementById('category_bar');
        category.classList.remove('show_category');
    };

    // 👇 Add To Cart
    const {addToCart} = useContext(CartContext);

    // 👇 For Pop Up Product View / Pop Up Slider
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
            <section id="shop-section">
                <div className="breadcrumb container pt-8 flex items-center gap-3">
                    <Link to='/' className="text-primary text-xl">
                        <AiOutlineHome/>
                    </Link>
                    <span className="text-sm text-gray-400">
                        <AiOutlineRight/>
                    </span>
                    <p className="font-medium text-gray-600">
                        Shop
                    </p>
                </div>

                <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
                    <div
                        className="hidden lg:block col-span-1 sidebar bg-white px-4 p-6 shadow rounded overflow-hidden">
                        <div className="divide-y divide-gray-200 space-y-5">
                            <div className="category-filter">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Categories</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-1"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">Man</label>
                                        <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-2"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="cat-2"
                                               className="text-gray-600 ml-3 cursor-pointer">Woman</label>
                                        <div className="ml-auto text-gray-600 text-sm">(8)</div>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" defaultChecked id="cat-3"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="cat-3"
                                               className="text-gray-600 ml-3 cursor-pointer">Shoes</label>
                                        <div className="ml-auto text-gray-600 text-sm">(35)</div>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-4"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="cat-4"
                                               className="text-gray-600 ml-3 cursor-pointer">Computer</label>
                                        <div className="ml-auto text-gray-600 text-sm">(47)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="brand-filter pt-6">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Brands</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" defaultChecked id="brand-1"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="brand-1"
                                               className="text-gray-600 ml-3 cursor-pointer">Adidas</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="brand-2"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="brand-2"
                                               className="text-gray-600 ml-3 cursor-pointer">Nike</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="brand-3"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="brand-3"
                                               className="text-gray-600 ml-3 cursor-pointer">Easy</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="brand-4"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="brand-4"
                                               className="text-gray-600 ml-3 cursor-pointer">Arong</label>
                                    </div>
                                </div>
                            </div>

                            <div className="price-filter pt-6">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Price</h3>
                                <div className="mt-4 flex items-center">
                                    <input type="text"
                                           className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                                           placeholder="Min"/>
                                    <span className="mx-3 text-gray-500">-</span>
                                    <input type="text"
                                           className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                                           placeholder="Max"/>
                                </div>
                            </div>

                            <div className="size-filter pt-6">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Size</h3>
                                <div className="flex items-center gap-2">
                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-xs" className="hidden"/>
                                        <label htmlFor="size-xs"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            XS
                                        </label>
                                    </div>

                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-s" className="hidden"/>
                                        <label htmlFor="size-s"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            S
                                        </label>
                                    </div>

                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-m" className="hidden"/>
                                        <label htmlFor="size-m"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            M
                                        </label>
                                    </div>

                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-l" className="hidden"/>
                                        <label htmlFor="size-l"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            L
                                        </label>
                                    </div>

                                    <div className="size-selector">
                                        <input type="radio" name="size" id="size-xl" className="hidden"/>
                                        <label htmlFor="size-xl"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            XL
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="color-filter pt-6">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Color</h3>
                                <div className="flex items-center gap-2">
                                    <div className="color-selector">
                                        <input type="radio" name="color" id="color-red" className="hidden"/>
                                        <label htmlFor="color-red"
                                               className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                               style={{backgroundColor: "red"}}></label>
                                    </div>

                                    <div className="color-selector">
                                        <input type="radio" name="color" id="color-white" className="hidden"/>
                                        <label htmlFor="color-white"
                                               className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                               style={{backgroundColor: "white"}}></label>
                                    </div>

                                    <div className="color-selector">
                                        <input type="radio" name="color" id="color-black" className="hidden"/>
                                        <label htmlFor="color-black"
                                               className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                               style={{backgroundColor: "black"}}></label>
                                    </div>

                                    <div className="color-selector">
                                        <input type="radio" name="color" id="color-yellow" className="hidden"/>
                                        <label htmlFor="color-yellow"
                                               className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                               style={{backgroundColor: "yellow"}}></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 lg:col-span-3 products">
                        <div className="sorting flex items-center gap-2 mb-4">
                            <div onClick={ClickShowCategoryBar} className="block lg:hidden mobile-filter-btn">
                                <button
                                    className="bg-primary border border-primary px-10 py-3 text-white font-medium rounded-md hover:bg-transparent hover:text-primary transition">
                                    FILTER
                                </button>
                            </div>

                            <select
                                className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                                <option defaultValue="">Default Sorting</option>
                                <option defaultValue="">Price Low-High</option>
                                <option defaultValue="">Price High-Low</option>
                                <option defaultValue="">Latest Product</option>
                            </select>

                            <div className="flex gap-2 ml-auto">
                                <div
                                    className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                                    <BsGrid/>
                                </div>

                                <div
                                    className="border border-gray-300 w-10 h-9 hidden lg:flex items-center justify-center text-gray-600 rounded cursor-pointer">
                                    <BsListUl/>
                                </div>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                allProducts.slice(0, 20).map((allProduct, index) => (
                                    <div key={index} className="col bg-white shadow rounded overflow-hidden group">
                                        <div className="product-image relative">
                                            <img src={allProduct.image} className="w-full" alt="ProductEight"/>
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
                                            <span className="text-sm text-gray-500 py-3 font-nato">
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

                                        <button
                                            onClick={() => {
                                                addToCart(allProduct);
                                                notify();
                                            }}
                                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition-all">
                                            Add To Cart
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Mobile Filter */}
                    <div id="category_bar"
                         className="block lg:hidden col-span-3 sm:col-span-4 sidebar bg-white px-4 p-6 shadow rounded overflow-hidden bg-white">
                        <div className="divide-y divide-gray-200 space-y-5">
                            <div className="category-filter">
                                <div onClick={ClickCloseCategoryBar} className="close-icon cursor-pointer">
                                    <MdOutlineClose className="text-xl text-primary float-right"/>
                                </div>

                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Categories</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-1"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">Man</label>
                                        <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-2"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="cat-2"
                                               className="text-gray-600 ml-3 cursor-pointer">Woman</label>
                                        <div className="ml-auto text-gray-600 text-sm">(8)</div>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" defaultChecked id="cat-3"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="cat-3"
                                               className="text-gray-600 ml-3 cursor-pointer">Shoes</label>
                                        <div className="ml-auto text-gray-600 text-sm">(35)</div>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="cat-4"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="cat-4"
                                               className="text-gray-600 ml-3 cursor-pointer">Computer</label>
                                        <div className="ml-auto text-gray-600 text-sm">(47)</div>
                                    </div>
                                </div>
                            </div>

                            <div className="brand-filter pt-6">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Brands</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" defaultChecked id="brand-1"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="brand-1"
                                               className="text-gray-600 ml-3 cursor-pointer">Adidas</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="brand-2"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="brand-2"
                                               className="text-gray-600 ml-3 cursor-pointer">Nike</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="brand-3"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="brand-3"
                                               className="text-gray-600 ml-3 cursor-pointer">Easy</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" id="brand-4"
                                               className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                        <label htmlFor="brand-4"
                                               className="text-gray-600 ml-3 cursor-pointer">Arong</label>
                                    </div>
                                </div>
                            </div>

                            <div className="price-filter pt-6">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Price</h3>
                                <div className="mt-4 flex items-center">
                                    <input type="text"
                                           className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                                           placeholder="Min"/>
                                    <span className="mx-3 text-gray-500">-</span>
                                    <input type="text"
                                           className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                                           placeholder="Max"/>
                                </div>
                            </div>

                            <div className="size-filter pt-6">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Size</h3>
                                <div className="flex items-center gap-2">
                                    <div className="size-selector-mobile">
                                        <input type="radio" name="size" id="size-xs-m" className="hidden"/>
                                        <label htmlFor="size-xs-m"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            XS
                                        </label>
                                    </div>

                                    <div className="size-selector-mobile">
                                        <input type="radio" name="size" id="size-s-m" className="hidden"/>
                                        <label htmlFor="size-s-m"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            S
                                        </label>
                                    </div>

                                    <div className="size-selector-mobile">
                                        <input type="radio" name="size" id="size-m-m" className="hidden"/>
                                        <label htmlFor="size-m-m"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            M
                                        </label>
                                    </div>

                                    <div className="size-selector-mobile">
                                        <input type="radio" name="size" id="size-l-m" className="hidden"/>
                                        <label htmlFor="size-l-m"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            L
                                        </label>
                                    </div>

                                    <div className="size-selector-mobile">
                                        <input type="radio" name="size" id="size-xl-m" className="hidden"/>
                                        <label htmlFor="size-xl-m"
                                               className="text-sm border border-gray-200 rounded-sm w-7 h-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            XL
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="color-filter pt-6">
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">Color</h3>
                                <div className="flex items-center gap-2">
                                    <div className="color-selector-mobile">
                                        <input type="radio" name="color" id="color-red-m" className="hidden"/>
                                        <label htmlFor="color-red-m"
                                               className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                               style={{backgroundColor: "red"}}></label>
                                    </div>

                                    <div className="color-selector-mobile">
                                        <input type="radio" name="color" id="color-white-m" className="hidden"/>
                                        <label htmlFor="color-white-m"
                                               className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                               style={{backgroundColor: "white"}}></label>
                                    </div>

                                    <div className="color-selector-mobile">
                                        <input type="radio" name="color" id="color-black-m" className="hidden"/>
                                        <label htmlFor="color-black-m"
                                               className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                               style={{backgroundColor: "black"}}></label>
                                    </div>

                                    <div className="color-selector-mobile">
                                        <input type="radio" name="color" id="color-yellow-m" className="hidden"/>
                                        <label htmlFor="color-yellow-m"
                                               className="border border-gray-200 rounded-sm w-6 h-5 cursor-pointer shadow-sm block"
                                               style={{backgroundColor: "yellow"}}></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Filter End */}
                </div>

                {/* Pagination */}
                <div className="container">
                    <div
                        className="flex text-center items-center justify-between bg-white px-4 py-3 sm:px-6">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <a href="/shop"
                               className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                            <a href="/shop"
                               className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                        </div>
                        <div className="hidden md:justify-center sm:flex sm:flex-1 sm:items-center justify-between">
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                     aria-label="Pagination">
                                    <a href="/shop"
                                       className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                    <a href="/shop" aria-current="page"
                                       className="relative z-10 inline-flex items-center border border-primary bg-indigo-50 px-4 py-2 text-sm font-medium text-primary focus:z-20">1</a>
                                    <a href="/shop"
                                       className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</a>
                                    <a href="/shop"
                                       className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
                                    <span
                                        className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
                                    <a href="/shop"
                                       className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">8</a>
                                    <a href="/shop"
                                       className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">9</a>
                                    <a href="/shop"
                                       className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">10</a>
                                    <a href="/shop"
                                       className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                        <span className="sr-only">Next</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
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

export default ShopPage;