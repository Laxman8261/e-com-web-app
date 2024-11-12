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
                    <img src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGbkApZPSr3T2OCQhzOYYTTdKBSYTPxYXyRSfliDcPC0fI2IozHggb5P2iDHhFs-jHGl7PoOs85kvk7wIeWv4GUSQvUI4e30C0WKgASAlJBOFKJ-O4Uno~PopqAO-Z6AqYDk7nQYhutjH81XzZ-zwQ9tPJjLqjljHsQOfXQm4OAgP1q1s6LlR7lPdbQeNulDk~z5trfdhlVz9P3YcH-4~d0HMm3cijgQTR9BXVzl8XRn1XkyMof~qyPco1r6n9F3Xd6k~fPLUXGaUkSLi3lh6n14tsdS8W9YtruU1aCaPpsoUszKJuQBlphiE0pHK6UAMFk6gD9xIMwiPFD02Ivh~A__" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Banner;