import React, {useContext} from "react";
import './header.css';
import {Link, NavLink} from "react-router-dom";
import Logo from '../../assets/images/head/logo.svg';
import {AiOutlineSearch, AiOutlineBars, AiOutlineClose} from "react-icons/ai";
import {VscHeart} from "react-icons/vsc";
import {BsCart2} from "react-icons/bs";
import {TfiUser} from "react-icons/tfi";
import {RiBarChartHorizontalFill} from "react-icons/ri";
import {TbSofa} from "react-icons/tb";
import {VscPerson} from "react-icons/vsc";
import {IoWomanOutline} from "react-icons/io5";
import {BsPlug} from "react-icons/bs";
import {RiHeadphoneLine} from "react-icons/ri";
import {GoWatch} from "react-icons/go";
import {RiComputerLine} from "react-icons/ri";
import {ImMobile} from "react-icons/im";
import {HiOutlineBars3} from "react-icons/hi2";
import {BiSearch} from "react-icons/bi";
import {CartContext} from "../../Context/cartContext";


function Header(props) {
    // 👇️ Toggle class on click Show Menu Bar (Button)
    const ClickShowMenuBar = event => {
        const nav = document.getElementById('mobile_menu');
        nav.classList.add('show_menu');
    };

    // 👇️ Toggle class on click Close Menu Bar (Button)
    const ClickCloseMenuBar = event => {
        const nav = document.getElementById('mobile_menu');
        nav.classList.remove('show_menu');
    };


    // 👇️ Toggle class on click Show Category Bar (Button)
    const ClickShowCategoryBar = event => {
        const category = document.getElementById('mobile_category');
        category.classList.add('show_category');
    };

    // 👇️ Toggle class on click Close Category Bar (Button)
    const ClickCloseCategoryBar = event => {
        const category = document.getElementById('mobile_category');
        category.classList.remove('show_category');
    };

    // 👇️ Toggle class on click Show Search Bar (Button)
    const ClickShowSearchBar = event => {
        const search = document.getElementById('search_bar');
        search.classList.add('show_search_bar');
    };

    // 👇️ Toggle class on click Close Search Bar (Button)
    const ClickCloseSearchBar = event => {
        const search = document.getElementById('search_bar');
        search.classList.remove('show_search_bar');
    };

    // 👇️ Show How many cart Item added
    const {cartItems} = useContext(CartContext);

    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-6 lg:py-4 shadow-sm bg-white w-full fixed lg:relative z-50">
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link to='/'>
                                <img src={Logo} alt="Logo"/>
                            </Link>
                        </div>

                        <div className="hidden lg:flex search-bar flex w-full max-w-xl relative">
                            <span className="absolute left-4 top-4 text-lg text-gray-400">
                                <AiOutlineSearch/>
                            </span>
                            <input type="text"
                                   className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none focus:border-primary focus:ring-0"
                                   placeholder="Search"/>
                            <button
                                className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search
                            </button>
                        </div>

                        <div className="icons flex items-center space-x-1">
                            <Link to='/wishlist'
                                  className="w-12 text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <VscHeart/>
                                </div>
                                <span
                                    className="absolute right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
                            </Link>

                            <Link to='/cart'
                                  className="w-12 text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <BsCart2/>
                                </div>
                                <span
                                    className="absolute right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                    {cartItems.length > 0 ? (
                                        <>
                                            {cartItems.length}
                                        </>
                                    ) : (
                                        0
                                    )}
                                </span>
                            </Link>

                            <Link to='/account'
                                  className="w-12 text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <TfiUser/>
                                </div>
                            </Link>

                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="block lg:hidden tab-mobile flex items-center gap-2">
                            <div onClick={ClickShowSearchBar}
                                 className="w-8 text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    <BiSearch/>
                                </div>
                            </div>

                            <div onClick={ClickShowMenuBar}
                                 className="w-8 text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    <HiOutlineBars3/>
                                </div>
                            </div>

                            <div onClick={ClickShowCategoryBar}
                                 className="w-8 text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    <AiOutlineBars/>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                <nav className="hidden lg:block bg-gray-800 overflow-hidden lg:overflow-visible">
                    <div className="container flex">

                        <div
                            className="all-category px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                            <span className="text-white">
                                <RiBarChartHorizontalFill/>
                            </span>
                            <span className="capitalize ml-2 text-white">All Categories</span>

                            <div
                                className="absolute z-50 w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition-all duration-500 invisible group-hover:visible">
                                <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <TbSofa className="text-2xl text-primary"/>
                                    </span>
                                    <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                                </Link>

                                <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <VscPerson className="text-2xl text-primary"/>
                                    </span>
                                    <span className="ml-6 text-gray-600 text-sm">Men</span>
                                </Link>

                                <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <IoWomanOutline className="text-2xl text-primary"/>
                                    </span>
                                    <span className="ml-6 text-gray-600 text-sm">Woman</span>
                                </Link>

                                <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <BsPlug className="text-2xl text-primary"/>
                                    </span>
                                    <span className="ml-6 text-gray-600 text-sm">Electronics</span>
                                </Link>

                                <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <RiHeadphoneLine className="text-2xl text-primary"/>
                                    </span>
                                    <span className="ml-6 text-gray-600 text-sm">Headphone</span>
                                </Link>

                                <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <GoWatch className="text-2xl text-primary"/>
                                    </span>
                                    <span className="ml-6 text-gray-600 text-sm">Watches</span>
                                </Link>

                                <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <RiComputerLine className="text-2xl text-primary"/>
                                    </span>
                                    <span className="ml-6 text-gray-600 text-sm">Computer</span>
                                </Link>

                                <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <ImMobile className="text-2xl text-primary"/>
                                    </span>
                                    <span className="ml-6 text-gray-600 text-sm">Mobile</span>
                                </Link>
                            </div>
                        </div>

                        <div className="navbar-items flex items-center justify-between flex-grow pl-12">
                            <div className="flex items-center space-x-6 capitalize">
                                <NavLink to='/' className="text-gray-200 hover:text-white transition">Home</NavLink>
                                <NavLink to='/shop' className="text-gray-200 hover:text-white transition">Shop</NavLink>
                                <NavLink to='/about-us' className="text-gray-200 hover:text-white transition">About
                                    Us</NavLink>
                                <NavLink to='/contact'
                                         className="text-gray-200 hover:text-white transition">Contact</NavLink>
                            </div>

                            <div className="auth-btn">
                                <NavLink to='/login' className="text-white hover:text-white transition">
                                    Login/Register
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block lg:hidden bg-white z-50 overflow-hidden w-[300px] h-[100%]">
                    <div className="head flex items-center justify-between px-8 pt-8">
                        <img src={Logo} className="" alt="Logo"/>
                        <div onClick={ClickCloseMenuBar} className="icon text-xl cursor-pointer hover:text-primary">
                            <AiOutlineClose/>
                        </div>
                    </div>

                    <div className="navbar-wrapper pl-12 pt-8 space-y-5">
                        <NavLink to='/' className="block text-gray-800 hover:text-primary transition">Home</NavLink>
                        <NavLink to='/shop' className="block text-gray-800 hover:text-primary transition">Shop</NavLink>
                        <NavLink to='/about-us' className="block text-gray-800 hover:text-primary transition">
                            About Us
                        </NavLink>
                        <NavLink to='/contact' className="block text-gray-800 hover:text-primary transition">
                            Contact
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Category */}
                <div id="mobile_category" className="block lg:hidden bg-white z-50 overflow-hidden w-[300px] h-[100%]">
                    <div className="head flex items-center justify-between bg-primary px-8 py-6">
                        <h2 className="text-white text-lg font-bold uppercase">ALL CATEGORIES</h2>
                        <div onClick={ClickCloseCategoryBar} className="icon text-xl cursor-pointer text-white">
                            <AiOutlineClose/>
                        </div>
                    </div>

                    <div className="navbar-wrapper pl-6 pt-8 space-y-5">
                        <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <TbSofa className="text-2xl text-primary"/>
                                    </span>
                            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                        </Link>

                        <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <VscPerson className="text-2xl text-primary"/>
                                    </span>
                            <span className="ml-6 text-gray-600 text-sm">Men</span>
                        </Link>

                        <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <IoWomanOutline className="text-2xl text-primary"/>
                                    </span>
                            <span className="ml-6 text-gray-600 text-sm">Woman</span>
                        </Link>

                        <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <BsPlug className="text-2xl text-primary"/>
                                    </span>
                            <span className="ml-6 text-gray-600 text-sm">Electronics</span>
                        </Link>

                        <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <RiHeadphoneLine className="text-2xl text-primary"/>
                                    </span>
                            <span className="ml-6 text-gray-600 text-sm">Headphone</span>
                        </Link>

                        <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <GoWatch className="text-2xl text-primary"/>
                                    </span>
                            <span className="ml-6 text-gray-600 text-sm">Watches</span>
                        </Link>

                        <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <RiComputerLine className="text-2xl text-primary"/>
                                    </span>
                            <span className="ml-6 text-gray-600 text-sm">Computer</span>
                        </Link>

                        <Link to='/' className="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                                    <span>
                                        <ImMobile className="text-2xl text-primary"/>
                                    </span>
                            <span className="ml-6 text-gray-600 text-sm">Mobile</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Search */}
                <div id="search_bar" className="flex lg:hidden w-full max-w-xl z-40">
                            <span className="absolute left-4 top-4 text-lg text-gray-400">
                                <AiOutlineSearch/>
                            </span>
                    <input type="text"
                           className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none focus:border-primary focus:ring-0"
                           placeholder="Search"/>
                    <button className="bg-primary border border-primary text-white rounded-r-md px-8">
                        Search
                    </button>

                    <button onClick={ClickCloseSearchBar}
                            className="bg-primary border border-primary text-white px-5 ml-1 rounded-md hover:text-primary hover:bg-transparent transition-all">
                        <AiOutlineClose/>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Header;