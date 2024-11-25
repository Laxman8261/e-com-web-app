import React from 'react'
import './banner.css'

const Banner = () => {
    return (
        <div>
            <section className="content-container">
                <div >
                    <div className="front-content">
                        <h1 className="front-content-h1">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    </div>
                    <div className="para-container">
                        <p className="para-container-para">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    </div>
                    <div className="button-container">
                        <button className="shop-now-button">Shop Now</button>
                    </div>
                    <div className="brands-qauality-details">
                        <div className="brands-container">
                            <p className="nummbers-bold">200+</p>
                            <p>International Brands</p>
                        </div>
                        <div className="brands-container">
                            <p className="nummbers-bold">2,000+</p>
                            <p>High Quality Products</p>
                        </div>
                        <div className="brands-container">
                            <p className="nummbers-bold">30,000+</p>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="home-image-container">
                    <img src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ciejQeSBFzSx1N7DvYVVTkRotQMXwAxeV7I3Jh5vVFNjHuvOEdRnIGSLMfYwqniOoB7dnD2KtE8CES9ZkSp7Hc8YCSazD3IzadRETRZPvIaUWIDnjiuxDfMIGXGYq-j6NJUNRryo9XBe3u6OkFAdZyUwhzC0Jy6yhKbpg-6Lm-mTjbsBeWjopqJRm7YGAD97x3IyrL8CB8Fuf7KdQf57K6bxjJNRXzy9A7O6Glia8BGfsPAEAu5QrmWTN2WFssOJiKvusPyIfgwFF7NTW5gwucPPxkBbdA82wTz1oCUo3SpDbpvYq8f8GK8supXoBSXdG2CzWNbTRTtYbyztmg9JVQ__" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Banner;