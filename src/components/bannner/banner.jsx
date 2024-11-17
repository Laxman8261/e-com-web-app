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
                    <img src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdcIfbiIoxN41P3cmOVr8Waxpkv0FkaxXB~TLqPdcGV4PxjyO-5SNyISAtbZAIaQOCeGHt2ArUuOTHUGC7aOKp~apJC6ucoVSzjgHPtSZ6PQj8wwkQdOa1g4vgVpjX3vgSC7xBHipp19C5N4rfFwUKtv3dpwZdB2KwUvzko~GJUrjnv~MHR1yV~9CH0IuFph4h4uyVWZCk9TbjFR9idUZ6dEjACl1fG4ivUdyLacoRpGkQJGxA8SqGjvrAYhbAYMbEcUZykUXLoSQkNo9qu8dBpN48Y0QO0lJPAQq7HFjmRlD3jfVUmj2nnLrAGZ15zsQrQyDiDzyRuZBXR64Io3pg__" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Banner;