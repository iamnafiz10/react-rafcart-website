import React from 'react';
import OfferAddImage from '../../../assets/images/offer-add.jpg';

function OfferAdd(props) {
    return (
        <>
            <section id="offer-add-section">
                <div className="container py-4">
                    <img src={OfferAddImage} className="w-full" alt="OfferAddImage"/>
                </div>
            </section>
        </>
    );
}

export default OfferAdd;