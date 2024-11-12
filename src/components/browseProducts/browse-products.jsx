import React from 'react'
import Casual from '../assets/Casual.png'
import formal from '../assets/formal.png'
import party from '../assets/party.png'
import gym from '../assets/gym.png'
import '../browseProducts/browse-products.css'
const BrowseProducts = () => {
    return (
        <section className="browse-dress-main-container">
            <div className="browse-dress-container">
                <h1>BROWSE BY DRESS STYLE</h1>
            </div>
            <div className='main-browse-dress-images'>
                <div className='browse-dress-images'>
                    <div className='casual-dress-image'>
                        <img src={Casual} alt="casual" />
                    </div>
                    <div className='formal-dress-image'>
                        <img src={formal} alt="formal" />
                        <p>Formal</p>
                    </div>
                </div>
                <div className='browse-dress-images'>
                    <div className='party-dress-image'>
                        <img src={party} alt="party" />
                        <p className='party-text'>Party</p>
                    </div>
                    <div className='gym-dress-image'>
                        <img src={gym} alt="gym" />
                        <p>Gym</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrowseProducts;