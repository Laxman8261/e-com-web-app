import React from 'react';
import Casual from '../assets/Casual.png';
import Formal from '../assets/formal.png';
import Party from '../assets/party.png';
import Gym from '../assets/gym.png';
import '../browseProducts/browse-products.css';

const BrowseProducts = () => {
    return (
        <section>
            <div className="maincontainer_brows">
                <div className="browser_name">
                    <h2 className="brows_header"> BROWSE BY DRESS STYLE</h2>
                </div>
                <div className="image_conatner">
                    <div className="first_row">
                        <div className="casuval product_card">
                            <img src={Casual} className="product_image" alt="casual" />
                            <p className="casual_text">Casual</p>
                        </div>
                        <div className="formal product_card">
                            <img src={Formal} className="product_image" alt="formal" />
                            <p className="formal_text">Formal</p>
                        </div>
                    </div>
                    <div className="first_row row_reverse">
                        <div className="casuval product_card">
                            <img src={Gym} className="product_image" alt="casual" />
                            <p className="casual_text">Gym</p>
                        </div>
                        <div className="formal product_card">
                            <img src={Party} className="product_image" alt="formal" />
                            <p className="formal_text">Party</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BrowseProducts;

