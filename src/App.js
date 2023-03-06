import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Layouts from "./Components/Layouts";
import Shop from "./Pages/Shop";
import ProductView from "./Components/View/ProductView";
import Login from "./Pages/Login";
import Register from "./Components/Auth/Register/Register";
import Account from "./Pages/Account";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import Wishlist from "./Pages/Wishlist";
import Address from "./Pages/Address";
import Password from "./Pages/Password";
import Voucher from "./Pages/Voucher";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import {CartProvider} from "./Context/cartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/shop' element={<Shop/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/about-us' element={<About/>}/>
                        <Route path='/account' element={<Account/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/address' element={<Address/>}/>
                        <Route path='/change-password' element={<Password/>}/>
                        <Route path='/voucher' element={<Voucher/>}/>
                        <Route path='/wishlist' element={<Wishlist/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/product/:id' element={<ProductView/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
