import React from 'react';
import Banner from "../Components/Home/Banner/Banner";
import Feature from "../Components/Home/Feature/Feature";
import Category from "../Components/Home/Category/Category";
import NewProduct from "../Components/Home/NewProduct/NewProduct";
import Recommended from "../Components/Home/Recommended/Recommended";
import OfferAdd from "../Components/Home/OfferAdd/OfferAdd";
import Offer from "../Components/Home/Offer/Offer";

function Home(props) {
    return (
        <>
            <Banner/>
            <Feature/>
            <Offer/>
            <Category/>
            <NewProduct/>
            <OfferAdd/>
            <Recommended/>
        </>
    );
}

export default Home;