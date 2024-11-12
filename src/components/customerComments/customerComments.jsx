import React from "react";
import '../customerComments/customerComments.css'

const CustomerCommentes = () => {
    return (
        <section className="customer-comments-main-container">
            <div className="customer-comments-container">
                <div className="customer-comments-container-header">
                    <h1>OUR HAPPY CUSTOMERS</h1>
                </div>
                <div className="comments-container">
                    <div className="customer-comment">
                        <span className="stars-rating">★★★★★</span>
                        <h2 className="customer-comment-name">Sarah M.</h2>
                        <p className="customer-comment-para">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className="customer-comment">
                        <span className="stars-rating">★★★★★</span>
                        <h2 className="customer-comment-name">Alex K.</h2>
                        <p className="customer-comment-para">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                    <div className="customer-comment">
                        <span className="stars-rating">★★★★★</span>
                        <h2 className="customer-comment-name">Jamesh L.</h2>
                        <p className="customer-comment-para">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    </div>
                    <div className="customer-comment">
                        <span className="stars-rating">★★★★★</span>
                        <h2 className="customer-comment-name">Mooen M.</h2>
                        <p className="customer-comment-para">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                    <div className="customer-comment">
                        <span className="stars-rating">★★★★★</span>
                        <h2 className="customer-comment-name">Jhon W.</h2>
                        <p className="customer-comment-para">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerCommentes;

