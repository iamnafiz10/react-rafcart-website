import React, {createContext, useContext, useEffect, useState} from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity = 1) => {
        const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingCartItem) {
            setCartItems(
                cartItems.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return {...cartItem, quantity: cartItem.quantity + quantity};
                    } else {
                        return cartItem;
                    }
                })
            );
        } else {
            setCartItems([...cartItems, {...item, quantity}]);
        }
    };

    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
    }, [cartItems]);

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeItem, clearCart, cartTotal, setCartTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}