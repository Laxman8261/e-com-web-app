import React from 'react';
import Casual from '../assets/Casual.png';
import Formal from '../assets/formal.png';
import Party from '../assets/party.png';
import Gym from '../assets/gym.png';
import '../browseProducts/browse-products.css';

const BrowseProducts = () => {
    return (
        <section className="browse-dress-main-container">
            <div className="browse-dress-container">
                <h1>BROWSE BY DRESS STYLE</h1>
            </div>
            <div className="main-browse-dress-images">
                <div className="image-row">
                    <div className="image-wrapper">
                        <img src={Casual} alt="Casual" />
                    </div>
                    <div className="image-wrapper">
                        <img src={Formal} alt="Formal" />
                        <p className="image-text">Formal</p>
                    </div>
                </div>
                <div className="image-row-2">
                    <div className="image-wrapper">
                        <img src={Party} alt="Party" />
                        <p className="image-text">Party</p>
                    </div>
                    <div className="image-wrapper">
                        <img className='image-gym' src={Gym} alt="Gym" />
                        <p className="image-text-gym">Gym</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BrowseProducts;

