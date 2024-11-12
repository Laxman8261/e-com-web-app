import React from "react";
import "../footer/footer.css"
import visa from '../assets/visa.png'
import masterCard from '../assets/masterCard.png'
import payPal from '../assets/payPal.png'
import applePay from '../assets/applePay.png'
import googlePay from '../assets/googlePay.png'

const Footer = () => {
    return (
        <section className="footer-main-container">
            <div className="footer-container-submain">
                <div className="footer-container">
                    <div className="subscribe-container-content">
                        <div>
                            <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                        </div>
                        <div className="subscribe-container-button">
                            <input type="email" placeholder="Enter your email address" className="subscribe-container-email" />
                            <button className="subscribe-container-button-tag">Subscribe to Newsletter</button>
                        </div>
                    </div>
                    <div>
                        <div className="footer-info-container">
                            <div className="footer-ShopCo-main-Contaiiner">
                                <div className="footer-ShopCo-Contaiiner">
                                    <h1 className="footer-ShopCo-Contaiiner-company-name">SHOP.CO</h1>
                                    <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                                    <div className="footer-info-logos">
                                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Symbol.png" alt="twitter" height={"25px"} />
                                        <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2.png" alt="facebook" height={"25px"} />
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.I_m9mn-spa_wbRcR1sCspwHaHa&pid=Api&P=0&h=180" alt="instagram" height={"25px"} />
                                        <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" alt="github" height={"25px"} />
                                    </div>
                                </div>
                            </div>
                            <div className="footer-ShopCo-details-main-Contaiiner">
                                <div className="company-help-container">
                                    <div className="footer-ShopCo-details-Contaiiner">
                                        <p className="footer-ShopCo-details-Contaiiner-header">COMPANY</p>
                                        <p>About</p>
                                        <p>Features</p>
                                        <p>Works</p>
                                        <p>Career</p>
                                    </div>
                                    <div className="footer-ShopCo-details-Contaiiner">
                                        <p className="footer-ShopCo-details-Contaiiner-header">HELP</p>
                                        <p>Customer Support</p>
                                        <p>Delivery Details</p>
                                        <p>Terms & Conditions</p>
                                        <p>Privacy Policy</p>
                                    </div>
                                </div>
                                <div className="FAQ-resources-container">
                                    <div className="footer-ShopCo-details-Contaiiner">
                                        <p className="footer-ShopCo-details-Contaiiner-header">FAQ</p>
                                        <p>Account</p>
                                        <p>Manage Deliveries</p>
                                        <p>Orders</p>
                                        <p>Payments</p>
                                    </div>
                                    <div className="footer-ShopCo-details-Contaiiner">
                                        <p className="footer-ShopCo-details-Contaiiner-header">RESOURCES</p>
                                        <p>Free eBooks</p>
                                        <p>Development Tutorial</p>
                                        <p>How to - Blog</p>
                                        <p>Youtube Playlist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-details-main-container">
                        <div className="footer-copyright-details-container">
                            <div>
                                <p>Shop.co © 2000-2023, All Rights Reserved</p>
                            </div>
                            <div className="payment-app-logos">
                                <img src={visa} alt="visa" />
                                <img src={masterCard} alt="masterCard" />
                                <img src={payPal} alt="payPal" />
                                <img src={applePay} alt="applePay" />
                                <img src={googlePay} alt="googlePay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;