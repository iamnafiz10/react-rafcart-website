import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineHome, AiOutlineRight} from "react-icons/ai";
import {RiDeleteBinLine} from "react-icons/ri";
import {CartContext} from "../../Context/cartContext";
import {useCart} from '../../Context/cartContext';

function CartPage() {
    const {addToCart, removeItem, clearCart} = useCart();

    const {cartItems} = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);

    // Delete Cart Item
    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    }

    // Calculate the total amount
    const totalAmount = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    // Update Cart Quantity
    const updateQuantity = (item, quantity) => {
        addToCart(item, quantity - item.quantity);
    };

    // Set Cart Total After Update Quantity
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
    }, [cartItems, setCartTotal]);

    return (
        <>
            <section id="cart-page-section">
                <div className="breadcrumb container pt-8 flex items-center gap-3">
                    <Link to='/' className="text-primary text-xl">
                        <AiOutlineHome/>
                    </Link>
                    <span className="text-sm text-gray-400">
                        <AiOutlineRight/>
                    </span>
                    <p className="font-medium text-gray-600">
                        Shopping Cart
                    </p>
                </div>

                <div className="container pt-10 pb-16">
                    <div className="grid grid-cols-12 items-start gap-6">
                        {/* Cart Info */}
                        <div className="col-span-12 lg:col-span-9 space-y-4">
                            {cartItems.length === 0 ? (
                                <div className="empty-cart py-16 text-center">
                                    <p>Your cart is empty.</p>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id}
                                         className="block lg:flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                                        <div className="wishlist-image w-28 flex-shrink-0">
                                            <img src={item.image} className="w-full" alt="CartOne"/>
                                        </div>

                                        <div className="mt-3 lg:mt-0 wishlist-content w-full lg:w-1/3">
                                            <h2 className="text-gray-800 text-md font-medium uppercase">
                                                {item.title}
                                            </h2>

                                            <p className="text-gray-600 font-normal text-sm mt-1">
                                                SKU: {item.sku}
                                            </p>

                                            <p className="text-gray-600 font-normal text-sm mt-1">
                                                Category: {item.category}
                                            </p>
                                        </div>

                                        <div className="mt-3 lg:mt-0 text-primary text-md font-semibold">
                                            ${item.price * item.quantity}
                                        </div>

                                        {/* Tab / Mobile */}
                                        <div className="lg:hidden flex items-center justify-between mt-4 lg:mt-0">
                                            <div className="quantity">
                                                <div
                                                    className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                                    <div
                                                        onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                                                        className="minus h-8 w-8 text-xl flex items-center hover:bg-gray-300 justify-center cursor-pointer select-none">
                                                        -
                                                    </div>
                                                    <div
                                                        className="minus h-8 w-8 text-sm flex items-center justify-center">
                                                        {item.quantity}
                                                    </div>
                                                    <div onClick={() => updateQuantity(item, item.quantity + 1)}
                                                         className="minus h-8 w-8 text-xl flex items-center hover:bg-gray-300 justify-center cursor-pointer select-none">
                                                        +
                                                    </div>
                                                </div>
                                            </div>

                                            <button onClick={() => handleRemoveItem(item.id)}
                                                    className="text-gray-600 text-xl cursor-pointer hover:text-primary">
                                                <RiDeleteBinLine/>
                                            </button>
                                        </div>

                                        {/* Desktop */}
                                        <div className="hidden lg:block quantity">
                                            <div
                                                className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                                <div
                                                    onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                                                    className="minus h-8 w-8 text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer select-none">
                                                    -
                                                </div>
                                                <div className=" h-8 w-8 text-sm flex items-center justify-center">
                                                    {item.quantity}
                                                </div>
                                                <div onClick={() => updateQuantity(item, item.quantity + 1)}
                                                     className="minus h-8 w-8 text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer select-none">
                                                    +
                                                </div>
                                            </div>
                                        </div>

                                        <button onClick={() => handleRemoveItem(item.id)}
                                                className="hidden lg:flex text-gray-600 text-xl cursor-pointer hover:text-primary">
                                            <RiDeleteBinLine/>
                                        </button>
                                    </div>
                                ))
                            )}

                            {cartItems.length > 0 && (
                                <div className="clear-cart-button">
                                    <button onClick={() => clearCart()}
                                            className="bg-primary border border-primary text-white lg:text-[10px] xl:text-sm px-6 py-3 font-medium rounded uppercase flex items-center hover:bg-transparent hover:text-primary transition-all">
                                        Clear Cart
                                    </button>
                                </div>
                            )}
                        </div>
                        {/* Cart Info End */}

                        {/* Summary */}
                        <div className="col-span-12 lg:col-span-3">
                            <div className="summary border border-gray-200 shadow p-4">
                                <div className="divide-y divide-gray-200 space-y-5">

                                    <div className="details">
                                        <h2 className="text-lg font-bold text-gray-800 uppercase">ORDER SUMMARY</h2>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="title">
                                                <h3 className="font-medium text-lg text-gray-800">Subtotal</h3>
                                            </div>
                                            <div className="price text-lg font-medium text-gray-800">
                                                ${totalAmount}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-2">
                                            <div className="title">
                                                <h3 className="font-normal text-md text-gray-800">Delivery</h3>
                                            </div>
                                            <div className="price text-md font-normal text-gray-800">
                                                Free
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-2">
                                            <div className="title">
                                                <h3 className="font-normal text-md text-gray-800">Tax</h3>
                                            </div>
                                            <div className="price text-md font-normal text-gray-800">
                                                Free
                                            </div>
                                        </div>
                                    </div>

                                    <div className="total-coupon">
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="title">
                                                <h3 className="text-lg font-bold text-gray-800">Total</h3>
                                            </div>
                                            <div className="price text-lg font-bold text-gray-800">
                                                ${totalAmount}
                                            </div>
                                        </div>

                                        <div className="flex mt-8">
                                            <input type="text"
                                                   className="w-full border border-gray-300 text-sm rounded-l-md placeholder-gray-400 focus:ring-0 focus:border-primary"
                                                   placeholder="Enter Coupon"/>
                                            <button type="submit"
                                                    className="bg-primary border border-primary text-white text-xs px-4 py-2 font-medium rounded-r-md uppercase flex items-center hover:bg-transparent hover:text-primary transition-all">
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                    <div className="processes-button">
                                        <Link to='/checkout'
                                              className="bg-primary border border-primary text-white lg:text-[10px] xl:text-sm px-6 py-3 font-medium rounded uppercase flex items-center hover:bg-transparent hover:text-primary transition-all">
                                            Processes to checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Summary End*/}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage;